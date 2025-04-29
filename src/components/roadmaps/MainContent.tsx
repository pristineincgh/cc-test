'use client';

import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { X } from 'lucide-react';
import { Dialog, DialogContent } from '../ui/dialog';
import { mockRoadmaps, Roadmap } from '@/lib/data/roadmapsData';
import RoadmapDesktopViewFilters from './DesktopFilters';
import RoadmapDetails from './RoadmapDetail';
import { EmptyRoadmaps } from './EmptyRoadmaps';
import { RoadmapCard } from './RoadmapCard';

const allAgeGroups = ['7-9', '10-12', '13-16'];
const allTopics = Array.from(
  new Set(mockRoadmaps.flatMap((roadmap) => roadmap.topics))
)
  .filter((topic): topic is string => topic !== undefined)
  .sort();

const MainContent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilterCount, setActiveFilterCount] = useState(0);
  const [selectedAgeGroups, setSelectedAgeGroups] = useState<string[]>([]);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [topicSearchValue, setTopicSearchValue] = useState('');
  const [topicComboboxOpen, setTopicComboboxOpen] = useState(false);
  const [isRoadmapDetailOpen, setIsRoadmapDetailOpen] = useState(false);
  const [selectedRoadmap, setSelectedRoadmap] = useState<Roadmap | null>(null);

  // handle roadmap detail modal open/close
  const openRoadmapDetail = (roadmap: Roadmap) => {
    setSelectedRoadmap(roadmap);
    setIsRoadmapDetailOpen(true);
  };

  // count active filters
  useEffect(() => {
    let count = 0;
    if (searchQuery) count++;
    if (selectedAgeGroups.length > 0) count++;
    if (selectedTopics.length > 0) count++;
    setActiveFilterCount(count);
  }, [searchQuery, selectedAgeGroups, selectedTopics]);

  // reset filters
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedAgeGroups([]);
    setSelectedTopics([]);
  };

  // filter roadmaps based on all filters
  const filteredRoadmaps = mockRoadmaps.filter((roadmap) => {
    const matchesSearchQuery =
      searchQuery === '' ||
      roadmap.title.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesAgeGroups =
      selectedAgeGroups.length === 0 ||
      selectedAgeGroups.includes(roadmap.ageGroup || '');

    const matchesTopics =
      selectedTopics.length === 0 ||
      selectedTopics.some((topic) => roadmap.topics?.includes(topic));

    return matchesSearchQuery && matchesAgeGroups && matchesTopics;
  });

  return (
    <section className="py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row">
          <RoadmapDesktopViewFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            activeFilterCount={activeFilterCount}
            selectedAgeGroups={selectedAgeGroups}
            setSelectedAgeGroups={setSelectedAgeGroups}
            allAgeGroups={allAgeGroups}
            selectedTopics={selectedTopics}
            setSelectedTopics={setSelectedTopics}
            topicSearchValue={topicSearchValue}
            setTopicSearchValue={setTopicSearchValue}
            topicComboboxOpen={topicComboboxOpen}
            setTopicComboboxOpen={setTopicComboboxOpen}
            allTopics={allTopics}
            resetFilters={resetFilters}
          />

          <div className="flex-1">
            {/* Mobile view filters */}

            {/* Active Filters */}
            {activeFilterCount > 0 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {selectedAgeGroups.length > 0 && (
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1 px-2 py-1"
                  >
                    Age: {selectedAgeGroups.length} selected
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => setSelectedAgeGroups([])}
                    />
                  </Badge>
                )}

                {selectedTopics.length > 0 && (
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1 px-2 py-1"
                  >
                    Topics: {selectedTopics.length} selected
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => setSelectedTopics([])}
                    />
                  </Badge>
                )}

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={resetFilters}
                  className="h-7 px-2 text-xs"
                >
                  Clear All
                </Button>
              </div>
            )}

            {/* Roadmaps List */}
            {filteredRoadmaps.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredRoadmaps.map((roadmap) => (
                  <RoadmapCard
                    key={roadmap.id}
                    roadmap={roadmap}
                    openDetail={openRoadmapDetail}
                  />
                ))}
              </div>
            ) : (
              <EmptyRoadmaps />
            )}

            {/* Roadmap Detail Modal */}
            <Dialog
              open={isRoadmapDetailOpen}
              onOpenChange={setIsRoadmapDetailOpen}
            >
              <DialogContent className="!max-w-4xl max-h-[90vh] overflow-y-auto">
                {selectedRoadmap && (
                  <RoadmapDetails roadmap={selectedRoadmap} />
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MainContent;
