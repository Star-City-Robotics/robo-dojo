import { createFileRoute, Link } from "@tanstack/react-router";
import {
	ArrowRight,
	Badge,
	BookOpen,
	CheckCircle,
	Code,
	Cpu,
	Download,
	Play,
	Video,
} from "lucide-react";
import ROBEHero from "public/assets/ROB-E-HERO-2.png?url";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<div className="bg-[#1e1e1e] min-h-screen">
			<div className="mx-auto px-4 py-16 container">
				{/* Hero Section */}
				<div className="mb-16 text-center">
					{/* ROB-E-HERO Logo/Brand */}
					<div className="flex flex-col items-center mb-8">
						<div className="mb-6">
							<img
								src={ROBEHero}
								alt="ROB-E Hero - RoboDOJO Mascot"
								className="w-64 md:w-80 h-64 md:h-80 object-contain"
							/>
						</div>
					</div>

					<p className="mx-auto mb-8 max-w-3xl text-[#cccccc] text-xl">
						Learn robotics programming through hands-on projects, interactive
						tutorials, and real-world applications. From beginner to advanced,
						master the skills that power the future of robotics.
					</p>

					<div className="flex sm:flex-row flex-col justify-center gap-4">
						<Link to="/dashboard">
							<Button
								size="lg"
								className="bg-[#007acc] hover:bg-[#005a9e] px-8 py-3 text-white text-lg"
							>
								<ArrowRight className="mr-2 w-5 h-5" />
								Enter the DOJO
							</Button>
						</Link>
						<Button
							size="lg"
							variant="outline"
							className="hover:bg-[#252526] px-8 py-3 border-[#3e3e42] text-[#cccccc] text-lg"
						>
							<Download className="mr-2 w-5 h-5" />
							Download Resources
						</Button>
					</div>
				</div>

				{/* Features Grid */}
				<div className="gap-8 grid md:grid-cols-3 mb-16">
					<Card className="bg-[#252526] hover:bg-[#2a2d2e] hover:shadow-lg p-6 border-[#3e3e42] text-center transition-all">
						<CardHeader>
							<div className="flex justify-center items-center bg-[#1e3a8a] mx-auto mb-4 rounded-lg w-12 h-12">
								<Code className="w-6 h-6 text-[#569cd6]" />
							</div>
							<CardTitle className="text-[#cccccc]">Interactive Code</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-[#6a6a6a]">
								Write, test, and debug robot code in real-time with our VS
								Code-style integrated development environment.
							</p>
						</CardContent>
					</Card>

					<Card className="bg-[#252526] hover:bg-[#2a2d2e] hover:shadow-lg p-6 border-[#3e3e42] text-center transition-all">
						<CardHeader>
							<div className="flex justify-center items-center bg-[#065f46] mx-auto mb-4 rounded-lg w-12 h-12">
								<Cpu className="w-6 h-6 text-[#4ec9b0]" />
							</div>
							<CardTitle className="text-[#cccccc]">
								Hands-on Projects
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-[#6a6a6a]">
								Build real robots and see your code come to life with
								step-by-step project guides and practical applications.
							</p>
						</CardContent>
					</Card>

					<Card className="bg-[#252526] hover:bg-[#2a2d2e] hover:shadow-lg p-6 border-[#3e3e42] text-center transition-all">
						<CardHeader>
							<div className="flex justify-center items-center bg-[#581c87] mx-auto mb-4 rounded-lg w-12 h-12">
								<Video className="w-6 h-6 text-[#dcdcaa]" />
							</div>
							<CardTitle className="text-[#cccccc]">Video Tutorials</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-[#6a6a6a]">
								Learn from expert instructors with comprehensive video lessons
								and live coding demonstrations.
							</p>
						</CardContent>
					</Card>
				</div>

				{/* Course Preview */}
				<div className="bg-[#252526] shadow-lg p-8 border border-[#3e3e42] rounded-2xl">
					<h2 className="mb-6 font-bold text-[#cccccc] text-3xl text-center">
						Featured Training: Java Programming Fundamentals
					</h2>
					<div className="items-center gap-8 grid md:grid-cols-2">
						<div>
							<p className="mb-4 text-[#6a6a6a]">
								Begin your journey in the RoboDOJO with our comprehensive Java
								programming course. Master the fundamentals, learn essential
								concepts, and build your first robotic applications.
							</p>
							<div className="space-y-3">
								<div className="flex items-center">
									<CheckCircle className="mr-3 w-5 h-5 text-[#4ec9b0]" />
									<span className="text-[#cccccc]">
										15+ interactive lessons
									</span>
								</div>
								<div className="flex items-center">
									<CheckCircle className="mr-3 w-5 h-5 text-[#4ec9b0]" />
									<span className="text-[#cccccc]">5 hands-on projects</span>
								</div>
								<div className="flex items-center">
									<CheckCircle className="mr-3 w-5 h-5 text-[#4ec9b0]" />
									<span className="text-[#cccccc]">
										Syntax-highlighted code examples
									</span>
								</div>
								<div className="flex items-center">
									<CheckCircle className="mr-3 w-5 h-5 text-[#4ec9b0]" />
									<span className="text-[#cccccc]">
										Progress tracking & completion badges
									</span>
								</div>
							</div>
							<Link to="/dashboard">
								<Button
									className="bg-[#007acc] hover:bg-[#005a9e] mt-6 text-white"
									size="lg"
								>
									<BookOpen className="mr-2 w-5 h-5" />
									Start Training
								</Button>
							</Link>
						</div>
						<div className="bg-[#1e1e1e] p-4 border border-[#3e3e42] rounded-lg">
							<div className="flex justify-between items-center mb-4">
								<span className="font-medium text-[#cccccc] text-sm">
									Training Progress
								</span>
								<span className="text-[#6a6a6a] text-sm">Ready to Start</span>
							</div>
							<div className="bg-[#3e3e42] rounded-full w-full h-2">
								<div
									className="bg-[#007acc] rounded-full h-2"
									style={{ width: "0%" }}
								></div>
							</div>
							<div className="space-y-2 mt-4">
								<div className="flex justify-between items-center text-sm">
									<span className="text-[#cccccc]">Installation & Setup</span>
									<Badge className="bg-[#3e3e42] text-[#ce9178]">0/3</Badge>
								</div>
								<div className="flex justify-between items-center text-sm">
									<span className="text-[#cccccc]">Java Basics</span>
									<Badge className="bg-[#3e3e42] text-[#ce9178]">0/4</Badge>
								</div>
								<div className="flex justify-between items-center text-sm">
									<span className="text-[#cccccc]">Robotics Applications</span>
									<Badge className="bg-[#3e3e42] text-[#ce9178]">0/2</Badge>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Call to Action */}
				<div className="mt-16 text-center">
					<div className="bg-[#252526] mx-auto p-8 border border-[#3e3e42] rounded-2xl max-w-2xl">
						<h3 className="mb-4 font-bold text-[#cccccc] text-2xl">
							Ready to Master Robotics?
						</h3>
						<p className="mb-6 text-[#6a6a6a]">
							Join the RoboDOJO community and start your journey from beginner
							to robotics expert. Access all courses, projects, and resources
							with a single click.
						</p>
						<Link to="/dashboard">
							<Button
								size="lg"
								className="bg-[#4ec9b0] hover:bg-[#3d9970] px-8 py-3 font-semibold text-[#1e1e1e] text-lg"
							>
								<Play className="mr-2 w-5 h-5" />
								Begin Your Training
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
