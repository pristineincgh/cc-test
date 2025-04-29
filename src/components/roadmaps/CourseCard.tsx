'use client';

import * as React from 'react';
import {
  ChevronDown,
  Clock,
  Edit,
  MoreHorizontal,
  Trash,
  Video,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Course, Topic } from '@/lib/data/roadmapsData';
import { TopicList } from './TopicList';

interface CourseCardProps {
  course: Course;
  topics: Topic[];
}

export function CourseCard({ course, topics }: CourseCardProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const sortedTopics = [...topics].sort(
    (a, b) => a.order_index - b.order_index
  );

  return (
    <div className="rounded-md border bg-background">
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
        <div className="flex items-center justify-between p-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h4 className="font-medium">{course.title}</h4>
              <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                {course.delivery_mode}
              </span>
            </div>
            <div className="mt-1 flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{course.max_session_duration_mins} mins/session</span>
              </div>
              <div className="flex items-center gap-1">
                <Video className="h-3 w-3" />
                <span>{sortedTopics.length} topics</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <ChevronDown
                  className={cn(
                    'h-4 w-4 transition-transform',
                    isOpen ? 'rotate-180' : 'rotate-0'
                  )}
                />
                <span className="sr-only">Toggle topics</span>
              </Button>
            </CollapsibleTrigger>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem className="flex cursor-pointer items-center">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit Course
                </DropdownMenuItem>
                <DropdownMenuItem className="flex cursor-pointer items-center text-destructive">
                  <Trash className="mr-2 h-4 w-4" />
                  Delete Course
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <CollapsibleContent>
          <div className="border-t px-4 py-3">
            <p className="text-sm text-muted-foreground">
              {course.description}
            </p>

            {sortedTopics.length > 0 && (
              <div className="mt-3">
                <h5 className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Topics
                </h5>
                <TopicList topics={sortedTopics} />
              </div>
            )}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
