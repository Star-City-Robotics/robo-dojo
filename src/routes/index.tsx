import { createFileRoute } from "@tanstack/react-router";
import {
	Badge,
	BookOpen,
	CheckCircle,
	Code,
	Cpu,
	Download,
	Play,
	Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<div className="bg-gradient-to-br from-blue-50 dark:from-gray-900 to-indigo-100 dark:to-gray-800 min-h-screen">
			<div className="mx-auto px-4 py-16 container">
				{/* Hero Section */}
				<div className="mb-16 text-center">
					<h1 className="mb-6 font-bold text-gray-900 dark:text-white text-5xl md:text-7xl">
						Learn Robotics
						<span className="text-blue-600 dark:text-blue-400">
							{" "}
							Programming
						</span>
					</h1>
					<p className="mx-auto mb-8 max-w-3xl text-gray-600 dark:text-gray-300 text-xl">
						Master the fundamentals of robotics programming with hands-on
						projects, interactive tutorials, and real-world applications.
					</p>
					<div className="flex sm:flex-row flex-col justify-center gap-4">
						<Button size="lg" className="px-8 py-3 text-lg">
							<Play className="mr-2 w-5 h-5" />
							Start Learning
						</Button>
						<Button size="lg" variant="outline" className="px-8 py-3 text-lg">
							<Download className="mr-2 w-5 h-5" />
							Download Resources
						</Button>
					</div>
				</div>

				{/* Features Grid */}
				<div className="gap-8 grid md:grid-cols-3 mb-16">
					<Card className="hover:shadow-lg p-6 text-center transition-shadow">
						<CardHeader>
							<div className="flex justify-center items-center bg-blue-100 dark:bg-blue-900 mx-auto mb-4 rounded-lg w-12 h-12">
								<Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
							</div>
							<CardTitle>Interactive Code</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-gray-600 dark:text-gray-300">
								Write, test, and debug robot code in real-time with our
								integrated development environment.
							</p>
						</CardContent>
					</Card>

					<Card className="hover:shadow-lg p-6 text-center transition-shadow">
						<CardHeader>
							<div className="flex justify-center items-center bg-green-100 dark:bg-green-900 mx-auto mb-4 rounded-lg w-12 h-12">
								<Cpu className="w-6 h-6 text-green-600 dark:text-green-400" />
							</div>
							<CardTitle>Hands-on Projects</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-gray-600 dark:text-gray-300">
								Build real robots and see your code come to life with
								step-by-step project guides.
							</p>
						</CardContent>
					</Card>

					<Card className="hover:shadow-lg p-6 text-center transition-shadow">
						<CardHeader>
							<div className="flex justify-center items-center bg-purple-100 dark:bg-purple-900 mx-auto mb-4 rounded-lg w-12 h-12">
								<Video className="w-6 h-6 text-purple-600 dark:text-purple-400" />
							</div>
							<CardTitle>Video Tutorials</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-gray-600 dark:text-gray-300">
								Learn from expert instructors with comprehensive video lessons
								and demonstrations.
							</p>
						</CardContent>
					</Card>
				</div>

				{/* Course Preview */}
				<div className="bg-white dark:bg-gray-800 shadow-lg p-8 rounded-2xl">
					<h2 className="mb-6 font-bold text-gray-900 dark:text-white text-3xl text-center">
						Featured Course: Robot Fundamentals
					</h2>
					<div className="items-center gap-8 grid md:grid-cols-2">
						<div>
							<p className="mb-4 text-gray-600 dark:text-gray-300">
								Start your robotics journey with our comprehensive fundamentals
								course. Learn essential concepts, programming basics, and build
								your first robot.
							</p>
							<div className="space-y-3">
								<div className="flex items-center">
									<CheckCircle className="mr-3 w-5 h-5 text-green-500" />
									<span className="text-gray-700 dark:text-gray-300">
										15+ video lessons
									</span>
								</div>
								<div className="flex items-center">
									<CheckCircle className="mr-3 w-5 h-5 text-green-500" />
									<span className="text-gray-700 dark:text-gray-300">
										5 hands-on projects
									</span>
								</div>
								<div className="flex items-center">
									<CheckCircle className="mr-3 w-5 h-5 text-green-500" />
									<span className="text-gray-700 dark:text-gray-300">
										Interactive code playground
									</span>
								</div>
								<div className="flex items-center">
									<CheckCircle className="mr-3 w-5 h-5 text-green-500" />
									<span className="text-gray-700 dark:text-gray-300">
										Certificate upon completion
									</span>
								</div>
							</div>
							<Button className="mt-6" size="lg">
								<BookOpen className="mr-2 w-5 h-5" />
								Explore Course
							</Button>
						</div>
						<div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
							<div className="flex justify-between items-center mb-4">
								<span className="font-medium text-gray-600 dark:text-gray-300 text-sm">
									Course Progress
								</span>
								<span className="text-gray-500 text-sm">0%</span>
							</div>
							<div className="bg-gray-200 dark:bg-gray-600 rounded-full w-full h-2">
								<div
									className="bg-blue-600 rounded-full h-2"
									style={{ width: "0%" }}
								></div>
							</div>
							<div className="space-y-2 mt-4">
								<div className="flex justify-between items-center text-sm">
									<span className="text-gray-600 dark:text-gray-300">
										Basic Components
									</span>
									<Badge variant="secondary">2/4</Badge>
								</div>
								<div className="flex justify-between items-center text-sm">
									<span className="text-gray-600 dark:text-gray-300">
										Programming Basics
									</span>
									<Badge variant="outline">0/6</Badge>
								</div>
								<div className="flex justify-between items-center text-sm">
									<span className="text-gray-600 dark:text-gray-300">
										Robot Assembly
									</span>
									<Badge variant="outline">0/3</Badge>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
