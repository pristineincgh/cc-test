import { Topic } from '@/lib/data/roadmapsData';
import { Clock } from 'lucide-react';

interface TopicListProps {
  topics: Topic[];
}

export function TopicList({ topics }: TopicListProps) {
  return (
    <ul className="space-y-2 pl-4 text-sm">
      {topics.map((topic) => (
        <li
          key={topic.id}
          className="relative border-l border-border pl-4 pb-2"
        >
          <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />
          <div className="font-medium">{topic.title}</div>
          <p className="text-xs text-muted-foreground">{topic.description}</p>
          <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>
              {topic.estimated_duration_sessions}{' '}
              {topic.estimated_duration_sessions === 1 ? 'session' : 'sessions'}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
