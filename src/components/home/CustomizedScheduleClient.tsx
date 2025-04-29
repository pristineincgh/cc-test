'use client';

import { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '../ui/badge';
import Link from 'next/link';
import AnimateInView from './AnimatedViewClient';

export function CustomizedSchedule() {
  const [sessions, setSessions] = useState('2');
  const [duration, setDuration] = useState([30]);

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <AnimateInView>
          <div className="text-center max-w-[800px] mx-auto mb-12">
            <Badge className="mb-4 dark:text-foreground">Flexibility</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Your Schedule, Your Rules
            </h2>
            <p className="text-muted-foreground text-lg">
              Customize your child&apos;s learning experience with flexible
              scheduling options that fit your family&apos;s lifestyle.
            </p>
          </div>
        </AnimateInView>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          <AnimateInView delay={0.1}>
            <Card className="h-full border-2 border-teal-100 shadow-lg">
              <CardContent className="h-full pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mr-4">
                    <Calendar className="h-5 w-5 text-teal-700" />
                  </div>
                  <h3 className="text-xl font-bold">
                    Choose sessions per week
                  </h3>
                </div>

                <div className="mt-6">
                  <Select value={sessions} onValueChange={setSessions}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select sessions per week" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 4 }, (_, i) => (
                        <SelectItem key={i} value={`${i + 1}`}>
                          {i + 1} session{i + 1 > 1 ? 's' : ''} per week
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <div className="mt-4 p-4 bg-teal-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-teal-800">
                        Selected:
                      </span>
                      <span className="text-sm font-bold text-teal-800">
                        {sessions} sessions per week
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimateInView>

          <AnimateInView delay={0.2}>
            <Card className="h-full border-2 border-blue-100 shadow-lg">
              <CardContent className="h-full pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/25 flex items-center justify-center mr-4">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Set session length</h3>
                </div>

                <div className="mt-6">
                  <div className="mb-6">
                    <Slider
                      value={duration}
                      min={15}
                      max={60}
                      step={15}
                      onValueChange={setDuration}
                      className="py-4"
                    />
                    <div className="flex justify-between text-sm text-slate-500 mt-2">
                      {Array.from({ length: 4 }, (_, i) => (
                        <span key={i} className="text-center">
                          {15 * (i + 1)} min
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-coral-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-coral-800">
                        Selected:
                      </span>
                      <span className="text-sm font-bold text-coral-800">
                        {duration[0]} minutes per session
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimateInView>
        </div>

        <AnimateInView>
          <div className="mt-10 text-center">
            <p className="text-lg font-medium mb-6 max-w-2xl mx-auto">
              Prevent burnout—lessons never exceed 1 hour per day, designed
              specifically for your child&apos;s attention span and learning
              style.
            </p>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="!border-secondary/50 text-secondary hover:!bg-secondary/30"
            >
              <Link href="/book-demo">Learn More About Our Approach</Link>
            </Button>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
