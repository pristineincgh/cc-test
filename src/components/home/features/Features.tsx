import { Badge } from '@/components/ui/badge';
import AnimateInView from '../AnimatedViewClient';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { features } from '@/lib/data/featuresData';
import { Card, CardContent } from '@/components/ui/card';
import PopularTopics from './PopularTopics';

const Features = () => {
  return (
    <section className="relative py-16 md:py-24">
      <div className="absolute -z-10 bottom-0 right-0 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 clip-path-default" />

      <AnimateInView>
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <Badge className="mb-4 dark:text-foreground">Our Features</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Everything Kids Need to Master Coding
          </h2>
          <p className="text-muted-foreground text-lg">
            Our platform combines fun, interactive learning with powerful tools
            to make coding accessible and enjoyable for kids of all skill
            levels.
          </p>
        </div>
      </AnimateInView>

      <Tabs defaultValue="features">
        <TabsList className="grid sm:w-[400px] mx-auto grid-cols-2 mb-5">
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="topics">Popular Topics</TabsTrigger>
        </TabsList>

        <TabsContent value="features">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <AnimateInView key={index} delay={feature.delay}>
                  <Card className="h-full transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{feature.title}</h3>
                        <p className="text-muted-foreground mt-2">
                          {feature.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimateInView>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="topics">
          <PopularTopics />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Features;
