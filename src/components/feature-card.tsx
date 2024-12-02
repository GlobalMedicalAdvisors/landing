"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideProps } from "lucide-react";
export function FeatureCard({
  icon,
  title,
  description,
}: {
  title: string;
  icon: React.ReactElement<LucideProps & React.ComponentProps<"svg">>;
  description: string;
}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-center">{icon}</div>
        <CardTitle className="text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
