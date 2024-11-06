"use client";

import React, { useEffect, useState, useRef } from "react";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { Slider } from "../ui/slider";
import { Volume2, Play, Pause } from "lucide-react";

const Player = ({
  bookTitle,
  previewUrl,
}: {
  bookTitle: string;
  previewUrl: string | null;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    audio.addEventListener("timeupdate", updateProgress);
    return () => audio.removeEventListener("timeupdate", updateProgress);
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (newVolume: number[]) => {
    const volumeValue = newVolume[0];
    setVolume(volumeValue);
    if (audioRef.current) {
      audioRef.current.volume = volumeValue;
    }
  };

  return (
    <div>
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4">
        <div className="container mx-auto flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={togglePlayPause}>
                {isPlaying ? (
                  <Pause className="h-6 w-6" />
                ) : (
                  <Play className="h-6 w-6" />
                )}
              </Button>
              <div className="text-sm font-medium">{bookTitle} - Preview</div>
            </div>
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
          </div>
          <Progress value={progress} className="w-full" />
        </div>
      </div>

      {previewUrl && <audio ref={audioRef} src={previewUrl} />}
    </div>
  );
};

export default Player;
