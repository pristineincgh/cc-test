import { Check, ChevronDown, Search, X } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { Badge } from '../ui/badge';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../ui/command';

interface RoadmapDesktopViewFiltersProps {
  activeFilterCount: number;
  resetFilters: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedAgeGroups: string[];
  setSelectedAgeGroups: (groups: string[]) => void;
  allAgeGroups: string[];
  selectedTopics: string[];
  setSelectedTopics: (topics: string[]) => void;
  topicSearchValue: string;
  setTopicSearchValue: (value: string) => void;
  topicComboboxOpen: boolean;
  setTopicComboboxOpen: (open: boolean) => void;
  allTopics: string[];
}

export const defaultValues = ['age', 'topic', 'tutor'];

const RoadmapDesktopViewFilters: React.FC<RoadmapDesktopViewFiltersProps> = ({
  activeFilterCount,
  resetFilters,
  searchQuery,
  setSearchQuery,
  selectedAgeGroups,
  setSelectedAgeGroups,
  allAgeGroups,
  selectedTopics,
  setSelectedTopics,
  topicSearchValue,
  setTopicSearchValue,
  topicComboboxOpen,
  setTopicComboboxOpen,
  allTopics,
}) => {
  return (
    <div className="hidden md:block w-72 pr-6">
      <div className="sticky top-[160px]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Filters</h3>
          {activeFilterCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={resetFilters}
              className="text-sm h-8"
            >
              Clear All
            </Button>
          )}
        </div>

        <div className="relative w-full md:w-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search for roadmaps..."
            className="pl-10 w-full rounded-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Accordion type="multiple" defaultValue={defaultValues}>
          {/* Age Group Filter */}
          <AccordionItem value="age">
            <AccordionTrigger className="text-base">
              Age Group
              {selectedAgeGroups.length > 0 && (
                <Badge variant="secondary" className="ml-2 font-normal">
                  {selectedAgeGroups.length}
                </Badge>
              )}
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-wrap gap-2">
                {allAgeGroups.map((ageGroup, index) => (
                  <Button
                    type="button"
                    key={ageGroup}
                    size={'sm'}
                    variant={
                      selectedAgeGroups.includes(ageGroup)
                        ? 'default'
                        : 'outline'
                    }
                    onClick={() => {
                      const updatedGroups = selectedAgeGroups.includes(ageGroup)
                        ? selectedAgeGroups.filter(
                            (group) => group !== ageGroup
                          )
                        : [...selectedAgeGroups, ageGroup];
                      setSelectedAgeGroups(updatedGroups);
                    }}
                    className={cn(
                      'rounded-full',
                      !selectedAgeGroups.includes(ageGroup) &&
                        'hover:bg-primary hover:text-background dark:hover:bg-muted dark:hover:text-foreground'
                    )}
                    aria-label={`Select ${ageGroup} age group`}
                  >
                    {index === 0 ? '👶' : index === 1 ? '🧒' : '👨‍🦰'} {ageGroup}
                  </Button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Topic Filter */}
          <AccordionItem value="topic">
            <AccordionTrigger className="text-base">
              Topic
              {selectedTopics.length > 0 && (
                <Badge variant="secondary" className="ml-2 font-normal">
                  {selectedTopics.length}
                </Badge>
              )}
            </AccordionTrigger>
            <AccordionContent>
              <Popover
                open={topicComboboxOpen}
                onOpenChange={setTopicComboboxOpen}
              >
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={topicComboboxOpen}
                    className="w-full justify-between dark:hover:text-foreground"
                  >
                    {selectedTopics.length > 0
                      ? `${selectedTopics.length} selected`
                      : 'Select topics'}
                    <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-0" align="start">
                  <Command>
                    <CommandInput
                      placeholder="Search topics..."
                      value={topicSearchValue}
                      onValueChange={setTopicSearchValue}
                    />
                    <CommandList>
                      <CommandEmpty>No topics found.</CommandEmpty>
                      <CommandGroup>
                        {allTopics
                          .filter((topic) =>
                            topic
                              .toLowerCase()
                              .includes(topicSearchValue.toLowerCase())
                          )
                          .map((topic) => (
                            <CommandItem
                              key={topic}
                              value={topic}
                              onSelect={() => {
                                setSelectedTopics(
                                  selectedTopics.includes(topic)
                                    ? selectedTopics.filter((t) => t !== topic)
                                    : [...selectedTopics, topic]
                                );
                              }}
                            >
                              <div
                                className={cn(
                                  'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border',
                                  selectedTopics.includes(topic)
                                    ? 'border-primary bg-primary text-primary-foreground'
                                    : 'border-muted opacity-50'
                                )}
                              >
                                {selectedTopics.includes(topic) && (
                                  <Check className="h-3 w-3" />
                                )}
                              </div>
                              {topic}
                            </CommandItem>
                          ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              {selectedTopics.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {selectedTopics.map((topic) => (
                    <Badge
                      key={topic}
                      variant="secondary"
                      className="flex items-center gap-1 px-2 py-1"
                    >
                      {topic}
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() =>
                          setSelectedTopics(
                            selectedTopics.filter((t) => t !== topic)
                          )
                        }
                      />
                    </Badge>
                  ))}
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
export default RoadmapDesktopViewFilters;
