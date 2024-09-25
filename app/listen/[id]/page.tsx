"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pause,
  Play,
  Volume2,
  Moon,
  Clock,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

type Chapter = {
  id: number;
  title: string;
  startTime: number;
};

type Audiobook = {
  id: number;
  title: string;
  author: string;
  narrator: string;
  coverUrl: string;
  audioUrl: string;
  duration: number;
  chapters: Chapter[];
};

export default function AudioStreamingPage() {
  const { id } = useParams();
  const [audiobook, setAudiobook] = useState<Audiobook | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [sleepTimer, setSleepTimer] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // In a real application, you would fetch the audiobook data from an API
    // For this example, we'll use mock data
    const mockAudiobook: Audiobook = {
      id: Number(id),
      title: "The Great Adventure",
      author: "Jane Doe",
      narrator: "John Smith",
      coverUrl:
        "https://m.media-amazon.com/images/I/711Finx0PRL._AC_UF1000,1000_QL80_.jpg",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      duration: 36000, // 10 hours in seconds
      chapters: [
        { id: 1, title: "Chapter 1: The Beginning", startTime: 0 },
        { id: 2, title: "Chapter 2: The Journey Begins", startTime: 3600 },
        { id: 3, title: "Chapter 3: Unexpected Challenges", startTime: 7200 },
        { id: 4, title: "Chapter 4: New Allies", startTime: 10800 },
        { id: 5, title: "Chapter 5: The Turning Point", startTime: 14400 },
        { id: 6, title: "Chapter 6: Overcoming Obstacles", startTime: 18000 },
        { id: 7, title: "Chapter 7: The Final Push", startTime: 21600 },
        { id: 8, title: "Chapter 8: Victory and Reflection", startTime: 25200 },
        { id: 9, title: "Chapter 9: The Return Home", startTime: 28800 },
        { id: 10, title: "Chapter 10: A New Beginning", startTime: 32400 },
      ],
    };

    setAudiobook(mockAudiobook);
  }, [id]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !audiobook) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      updateCurrentChapter(audio.currentTime);
    };

    audio.addEventListener("timeupdate", updateTime);
    return () => audio.removeEventListener("timeupdate", updateTime);
  }, [audiobook]);

  useEffect(() => {
    if (sleepTimer !== null && sleepTimer > 0) {
      const timer = setTimeout(() => {
        setSleepTimer(sleepTimer - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (sleepTimer === 0) {
      pauseAudio();
      setSleepTimer(null);
    }
  }, [sleepTimer]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const pauseAudio = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  const handleVolumeChange = (newVolume: number[]) => {
    const volumeValue = newVolume[0];
    setVolume(volumeValue);
    if (audioRef.current) {
      audioRef.current.volume = volumeValue;
    }
  };

  const handlePlaybackRateChange = (rate: number) => {
    setPlaybackRate(rate);
    if (audioRef.current) {
      audioRef.current.playbackRate = rate;
    }
  };

  const handleSeek = (time: number[]) => {
    const seekTime = time[0];
    setCurrentTime(seekTime);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
    }
    updateCurrentChapter(seekTime);
  };

  const updateCurrentChapter = (time: number) => {
    if (!audiobook) return;
    const newChapterIndex = audiobook.chapters.findIndex((chapter, index) => {
      const nextChapter = audiobook.chapters[index + 1];
      return (
        time >= chapter.startTime &&
        (!nextChapter || time < nextChapter.startTime)
      );
    });
    if (newChapterIndex !== currentChapterIndex) {
      setCurrentChapterIndex(newChapterIndex);
    }
  };

  const changeChapter = (direction: "next" | "previous") => {
    if (!audiobook) return;
    const newIndex =
      direction === "next" ? currentChapterIndex + 1 : currentChapterIndex - 1;
    if (newIndex >= 0 && newIndex < audiobook.chapters.length) {
      setCurrentChapterIndex(newIndex);
      handleSeek([audiobook.chapters[newIndex].startTime]);
    }
  };

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const setSleepTimerDuration = (minutes: number) => {
    setSleepTimer(minutes * 60);
  };

  if (!audiobook) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl text-center">
            {audiobook.title}
          </CardTitle>
          <p className="text-center text-muted-foreground">
            By {audiobook.author} | Narrated by {audiobook.narrator}
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <img
              src={audiobook.coverUrl}
              alt={`${audiobook.title} cover`}
              className="w-64 h-auto rounded-lg shadow-lg"
            />
            <div className="flex flex-col items-center md:items-start w-full max-w-md">
              <h2 className="text-2xl font-bold mb-4">
                {audiobook.chapters[currentChapterIndex].title}
              </h2>
              <p className="text-lg mb-2">
                {formatTime(currentTime)} / {formatTime(audiobook.duration)}
              </p>
              <div className="flex items-center space-x-4 mb-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => changeChapter("previous")}
                  disabled={currentChapterIndex === 0}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button size="icon" onClick={togglePlayPause}>
                  {isPlaying ? (
                    <Pause className="h-6 w-6" />
                  ) : (
                    <Play className="h-6 w-6" />
                  )}
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => changeChapter("next")}
                  disabled={
                    currentChapterIndex === audiobook.chapters.length - 1
                  }
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <Slider
                className="w-full"
                value={[currentTime]}
                max={audiobook.duration}
                step={1}
                onValueChange={handleSeek}
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2">
              <Volume2 className="h-4 w-4" />
              <Slider
                className="w-24"
                value={[volume]}
                max={1}
                step={0.01}
                onValueChange={handleVolumeChange}
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Speed: {playbackRate}x</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {[0.5, 0.75, 1, 1.25, 1.5, 1.75, 2].map((rate) => (
                  <DropdownMenuItem
                    key={rate}
                    onSelect={() => handlePlaybackRateChange(rate)}
                  >
                    {rate}x
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Clock className="mr-2 h-4 w-4" />
                  Sleep Timer
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {[15, 30, 45, 60].map((minutes) => (
                  <DropdownMenuItem
                    key={minutes}
                    onSelect={() => setSleepTimerDuration(minutes)}
                  >
                    {minutes} minutes
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {sleepTimer !== null && (
            <div className="text-center mb-4">
              <Moon className="inline-block mr-2 h-4 w-4" />
              Sleep timer: {formatTime(sleepTimer)}
            </div>
          )}

          <div className="space-y-2">
            <h3 className="text-xl font-bold mb-2">Chapters</h3>
            {audiobook.chapters.map((chapter, index) => (
              <Button
                key={chapter.id}
                variant="ghost"
                className={`w-full justify-start ${
                  index === currentChapterIndex ? "bg-primary/10" : ""
                }`}
                onClick={() => handleSeek([chapter.startTime])}
              >
                {chapter.title}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <audio
        ref={audioRef}
        src={audiobook.audioUrl}
        onEnded={() => setIsPlaying(false)}
        onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime || 0)}
      />
    </div>
  );
}
