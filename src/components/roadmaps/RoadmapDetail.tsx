import { PlusCircle } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Button } from '../ui/button';
import { DialogDescription, DialogTitle } from '../ui/dialog';
import Link from 'next/link';
import {
  mockCourses,
  mockLearningPaths,
  mockTopics,
  Roadmap,
} from '@/lib/data/roadmapsData';
import { LearningPathSection } from './LearningPathSection';

const RoadmapDetails = ({ roadmap }: { roadmap: Roadmap }) => {
  const learningPaths = mockLearningPaths
    .filter((lp) => lp.roadmap_id === roadmap.id)
    .sort((a, b) => a.order_index - b.order_index);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <DialogTitle className="font-heading text-3xl font-bold md:text-4xl">
              {roadmap.title}
            </DialogTitle>
            <DialogDescription className="text-base">
              {roadmap.description}
            </DialogDescription>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {roadmap.topics &&
              roadmap.topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground"
                >
                  {topic}
                </span>
              ))}
          </div>

          <div className="flex flex-col gap-6 mt-6">
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-2xl font-bold">
                Learning Paths
              </h2>
            </div>

            {learningPaths.length > 0 ? (
              <div className="flex flex-col gap-8">
                {learningPaths.map((learningPath) => (
                  <LearningPathSection
                    key={learningPath.id}
                    learningPath={learningPath}
                    courses={mockCourses.filter(
                      (c) => c.learning_path_id === learningPath.id
                    )}
                    topics={mockTopics}
                  />
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="rounded-full bg-muted p-3">
                    <PlusCircle className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="mt-4 font-medium">No learning paths yet</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    This roadmap has no learning paths yet. Please check back
                    later.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      <div className="lg:col-span-1">
        <Card className="sticky top-24">
          <CardHeader>
            <CardTitle>Roadmap Details</CardTitle>
            <CardDescription>Information about this roadmap</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div>
              <p className="text-sm font-medium">Created by</p>
              <p className="text-sm text-muted-foreground">
                {roadmap.created_by}
              </p>
            </div>

            <div>
              <p className="text-sm font-medium">Learning paths</p>
              <p className="text-sm text-muted-foreground">
                {learningPaths.length} paths
              </p>
            </div>

            <div>
              <p className="text-sm font-medium">Total courses</p>
              <p className="text-sm text-muted-foreground">
                {
                  mockCourses.filter((c) =>
                    learningPaths.some((lp) => lp.id === c.learning_path_id)
                  ).length
                }{' '}
                courses
              </p>
            </div>

            <div className="pt-4">
              <Button className="w-full" asChild>
                <Link href="/book-demo">Talk to a tutor</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default RoadmapDetails;
