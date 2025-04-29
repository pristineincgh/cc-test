'use client';

import * as React from 'react';
import { ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Separator } from '@/components/ui/separator';
import { CourseCard } from './CourseCard';
import { Course, LearningPath, Topic } from '@/lib/data/roadmapsData';

interface LearningPathSectionProps {
  learningPath: LearningPath;
  courses: Course[];
  topics: Topic[];
}

export function LearningPathSection({
  learningPath,
  courses,
  topics,
}: LearningPathSectionProps) {
  const [isOpen, setIsOpen] = React.useState(true);
  const sortedCourses = [...courses].sort(
    (a, b) => a.order_index - b.order_index
  );

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
        <div className="flex items-center justify-between p-4">
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 p-2 hover:bg-transparent"
            >
              <ChevronDown
                className={cn(
                  'h-4 w-4 transition-transform',
                  isOpen ? 'rotate-180' : 'rotate-0'
                )}
              />
              <h3 className="text-lg font-semibold">{learningPath.title}</h3>
            </Button>
          </CollapsibleTrigger>
        </div>
        <Separator />
        <CollapsibleContent>
          <div className="p-4 pt-2">
            <p className="text-sm text-muted-foreground">
              {learningPath.description}
            </p>

            <div className="mt-4 space-y-4">
              {sortedCourses.length > 0 ? (
                sortedCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    topics={topics.filter((t) => t.course_id === course.id)}
                  />
                ))
              ) : (
                <div className="rounded-md border border-dashed p-6 text-center">
                  <h4 className="font-medium">
                    No courses in this learning path yet
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    This learning path has no courses yet. Please check back
                    later.
                  </p>
                </div>
              )}
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
