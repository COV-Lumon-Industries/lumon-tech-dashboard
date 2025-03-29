"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

// Define types for our score status
type ScoreStatus = {
  status: "Excellent" | "Good" | "Fair" | "Poor";
  color: string;
  loanChance: number;
};

// Function to determine score status, color, and loan approval chance
const getScoreStatus = (score: number): ScoreStatus => {
  if (score >= 800) {
    return {
      status: "Excellent",
      color: "hsl(143, 85%, 40%)",
      loanChance: 95,
    }; // Green
  } else if (score >= 700) {
    return {
      status: "Good",
      color: "hsl(48, 96%, 53%)",
      loanChance: 80,
    }; // Yellow
  } else if (score >= 600) {
    return {
      status: "Fair",
      color: "hsl(31, 92%, 45%)",
      loanChance: 60,
    }; // Orange
  } else {
    return {
      status: "Poor",
      color: "hsl(0, 84%, 60%)",
      loanChance: 30,
    }; // Red
  }
};

type ChartDataItem = {
  name: string;
  score: number;
  fill: string;
};

export default function CreditScoreCard() {
  // Sample credit score
  const creditScore = 720;
  const { status, color, loanChance } = getScoreStatus(creditScore);

  // Calculate percentage for chart (out of 1000)
  const scorePercentage = (creditScore / 1000) * 100;

  const chartData: ChartDataItem[] = [
    { name: "Credit Score", score: scorePercentage, fill: color },
  ];

  const chartConfig = {
    score: {
      label: "Credit Score",
      color: "currentColor",
    },
  } satisfies ChartConfig;

  

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Credit Score</CardTitle>
        <CardDescription>Updated March 2025</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={180}
            endAngle={-180}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="score" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy ?? 0) - 12}
                          className="fill-foreground text-4xl font-bold"
                        >
                          {creditScore}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy ?? 0) + 12}
                          className="fill-muted-foreground"
                        >
                          {status}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">

  
        <div className="mt-2 text-center font-medium" style={{ color }}>
          {loanChance}% chance of loan approval
        </div>
      </CardFooter>
    </Card>
  );
}
