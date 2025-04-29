'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Roadmap } from '@/lib/data/roadmapsData';

interface RoadmapCardProps {
  roadmap: Roadmap;
  className?: string;
  openDetail: (roadmap: Roadmap) => void;
}

export function RoadmapCard({
  roadmap,
  className,
  openDetail,
}: RoadmapCardProps) {
  return (
    <Card className={cn('flex flex-col', className)}>
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardTitle className="line-clamp-1">{roadmap.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription className="line-clamp-3">
          {roadmap.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex items-center justify-between pt-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-muted">
            {roadmap.created_by.charAt(0).toUpperCase()}
          </span>
          <span>Created by {roadmap.created_by}</span>
        </div>
      </CardFooter>
      <CardFooter className="flex gap-2 pt-0">
        <Button className="flex-1" onClick={() => openDetail(roadmap)}>
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
