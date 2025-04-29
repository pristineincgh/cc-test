'use client';

import { AlertCircle, Search } from 'lucide-react';
import { Input } from '../ui/input';
import { useMemo, useState } from 'react';
import { faqData } from '@/lib/data/faqData';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { Alert, AlertDescription } from '../ui/alert';

const FAQList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<keyof typeof faqData>('general');

  // Filter FAQ items based on search query
  const filteredFaqData = useMemo(() => {
    if (!searchQuery.trim()) return faqData;

    const query = searchQuery.toLowerCase().trim();
    const filtered: {
      [key: string]: { id: string; question: string; answer: string }[];
    } = {};

    (Object.keys(faqData) as (keyof typeof faqData)[]).forEach((category) => {
      filtered[category] = faqData[category].filter(
        (item) =>
          item.question.toLowerCase().includes(query) ||
          item.answer.toLowerCase().includes(query)
      );
    });

    return filtered;
  }, [searchQuery]);

  // Check if any results were found
  const hasResults = useMemo(() => {
    return Object.values(filteredFaqData).some(
      (category) => category.length > 0
    );
  }, [filteredFaqData]);

  // Count total results
  const totalResults = useMemo(() => {
    return Object.values(filteredFaqData).reduce(
      (total, category) => total + category.length,
      0
    );
  }, [filteredFaqData]);

  // Find which tab has results and set it as active if current tab has no results
  const updateActiveTabIfNeeded = () => {
    if (filteredFaqData[activeTab].length === 0 && searchQuery) {
      for (const category of Object.keys(filteredFaqData)) {
        if (filteredFaqData[category as keyof typeof faqData].length > 0) {
          setActiveTab(category as keyof typeof faqData);
          break;
        }
      }
    }
  };

  // Update active tab when filtered results change
  useMemo(() => {
    updateActiveTabIfNeeded();
  }, [filteredFaqData, activeTab]);

  return (
    <div className="container max-w-5xl py-12 mx-auto">
      {/* Search Bar */}
      <div className="relative max-w-xl mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for questions..."
            className="pl-10 py-6 text-base"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Search Results Summary */}
      {searchQuery.trim() && (
        <div className="max-w-xl mx-auto mb-8">
          {hasResults ? (
            <p className="text-sm text-muted-foreground">
              Found {totalResults} result{totalResults !== 1 ? 's' : ''} for
              &quot;
              {searchQuery}&quot;
            </p>
          ) : (
            <Alert
              variant="destructive"
              className="bg-destructive/10 border-destructive/20"
            >
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                No results found for &quot;{searchQuery}&quot;. Please try a
                different search term.
              </AlertDescription>
            </Alert>
          )}
        </div>
      )}

      {/* FAQ Categories */}
      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as keyof typeof faqData)}
        className="mb-12 lg:w-3xl mx-auto"
      >
        <TabsList className="w-full flex flex-wrap justify-center gap-2 h-auto p-1 mb-8">
          <TabsTrigger
            value="general"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            General {searchQuery && `(${filteredFaqData.general.length})`}
          </TabsTrigger>
          <TabsTrigger
            value="courses"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Courses & Programs{' '}
            {searchQuery && `(${filteredFaqData.courses.length})`}
          </TabsTrigger>
          <TabsTrigger
            value="technical"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Technical {searchQuery && `(${filteredFaqData.technical.length})`}
          </TabsTrigger>
          <TabsTrigger
            value="pricing"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Pricing & Payment{' '}
            {searchQuery && `(${filteredFaqData.pricing.length})`}
          </TabsTrigger>
          <TabsTrigger
            value="parents"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Parents & Guardians{' '}
            {searchQuery && `(${filteredFaqData.parents.length})`}
          </TabsTrigger>
        </TabsList>

        {/* General Questions */}
        <TabsContent value="general">
          {filteredFaqData.general.length > 0 ? (
            <Accordion type="single" collapsible className="w-full">
              {filteredFaqData.general.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="text-lg font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : searchQuery ? (
            <p className="text-center text-muted-foreground py-8">
              No matching questions in this category.
            </p>
          ) : null}
        </TabsContent>

        {/* Courses & Programs */}
        <TabsContent value="courses">
          {filteredFaqData.courses.length > 0 ? (
            <Accordion type="single" collapsible className="w-full">
              {filteredFaqData.courses.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="text-lg font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : searchQuery ? (
            <p className="text-center text-muted-foreground py-8">
              No matching questions in this category.
            </p>
          ) : null}
        </TabsContent>

        {/* Technical */}
        <TabsContent value="technical">
          {filteredFaqData.technical.length > 0 ? (
            <Accordion type="single" collapsible className="w-full">
              {filteredFaqData.technical.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="text-lg font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : searchQuery ? (
            <p className="text-center text-muted-foreground py-8">
              No matching questions in this category.
            </p>
          ) : null}
        </TabsContent>

        {/* Pricing & Payment */}
        <TabsContent value="pricing">
          {filteredFaqData.pricing.length > 0 ? (
            <Accordion type="single" collapsible className="w-full">
              {filteredFaqData.pricing.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="text-lg font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : searchQuery ? (
            <p className="text-center text-muted-foreground py-8">
              No matching questions in this category.
            </p>
          ) : null}
        </TabsContent>

        {/* Parents & Guardians */}
        <TabsContent value="parents">
          {filteredFaqData.parents.length > 0 ? (
            <Accordion type="single" collapsible className="w-full">
              {filteredFaqData.parents.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="text-lg font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : searchQuery ? (
            <p className="text-center text-muted-foreground py-8">
              No matching questions in this category.
            </p>
          ) : null}
        </TabsContent>
      </Tabs>

      {/* Still Have Questions */}
      <div className="bg-muted rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Can&apos;t find the answer you&apos;re looking for? Our support team
          is here to help you with any questions you might have.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/contact">Contact Support</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/book-demo">Book a Free Demo</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default FAQList;
