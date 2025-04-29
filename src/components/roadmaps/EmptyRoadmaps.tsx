import { PlusCircle, Video } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function EmptyRoadmaps() {
  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center py-12 text-center">
        <div className="rounded-full bg-muted p-3">
          <PlusCircle className="h-8 w-8 text-muted-foreground" />
        </div>
        <h3 className="mt-4 text-xl font-medium">No roadmaps found</h3>
        <p className="mt-2 text-sm text-muted-foreground max-w-md">
          Get started by creating a new roadmap or use one of our templates to
          customize your child&apos;s learning journey.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <Button asChild>
            <Link href="/book-demo" className="gap-2">
              <Video className="h-4 w-4" />
              Talk to a Tutor
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
