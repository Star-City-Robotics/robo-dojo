import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dummy/content')({
  component: RouteComponent,
})

function RouteComponent() {
    return <div>Hello</div>
//   return {selectedResource ? (
// 						// Resource View (existing code)
// 						<Card className="bg-[#252526] border border-[#3e3e42]">
// 							<CardHeader className="p-4 border-[#3e3e42] border-b">
// 								<div className="flex justify-between items-center">
// 									<div className="flex items-center space-x-3">
// 										{getResourceIcon(selectedResource.type)}
// 										<div>
// 											<CardTitle className="text-[#cccccc] text-lg">
// 												{selectedResource.name}
// 											</CardTitle>
// 											<div className="flex items-center space-x-4 mt-1 text-[#969696] text-sm">
// 												{selectedResource.duration && (
// 													<div className="flex items-center space-x-1">
// 														<Clock className="w-3 h-3" />
// 														<span>{selectedResource.duration}</span>
// 													</div>
// 												)}
// 												{selectedResource.pages && (
// 													<div className="flex items-center space-x-1">
// 														<FileText className="w-3 h-3" />
// 														<span>{selectedResource.pages} pages</span>
// 													</div>
// 												)}
// 												{selectedResource.language && (
// 													<div className="flex items-center space-x-1">
// 														<Code className="w-3 h-3" />
// 														<span>{selectedResource.language}</span>
// 													</div>
// 												)}
// 												{selectedResource.dueDate && (
// 													<div className="flex items-center space-x-1">
// 														<Clock className="w-3 h-3" />
// 														<span>Due: {selectedResource.dueDate}</span>
// 													</div>
// 												)}
// 											</div>
// 										</div>
// 									</div>
// 									{selectedResource.completed && (
// 										<Badge className="bg-[#0e4f1c] border border-[#14532d] text-[#4ec9b0] text-sm">
// 											<CheckCircle className="mr-1 w-3 h-3" />
// 											Completed
// 										</Badge>
// 									)}
// 								</div>
// 							</CardHeader>
// 							<CardContent className="space-y-4 p-4">
// 								<div className="bg-[#2d2d30] p-3 border border-[#3e3e42] rounded-sm">
// 									<p className="text-[#cccccc] text-base leading-relaxed">
// 										{selectedResource.description}
// 									</p>
// 								</div>

// 								{/* Interactive Guide with Markdown */}
// 								{selectedResource.type === "guide" &&
// 									selectedResource.content && (
// 										<div className="bg-[#1e1e1e] p-4 border border-[#3e3e42] rounded-sm">
// 											<MarkdownRenderer content={selectedResource.content} />
// 										</div>
// 									)}

// 								{/* Java Playground */}
// 								{selectedResource.type === "playground" && (
// 									<div className="gap-4 grid grid-cols-1 lg:grid-cols-2">
// 										{/* Code Editor */}
// 										<div className="flex flex-col">
// 											<div className="flex justify-between items-center mb-2">
// 												<h4 className="font-medium text-[#cccccc] text-base">
// 													Java Code Editor
// 												</h4>
// 												<div className="flex space-x-2">
// 													<Button
// 														size="sm"
// 														variant="outline"
// 														onClick={resetCode}
// 														className="hover:bg-[#2d2d30] border-[#3e3e42] h-8 text-[#cccccc] text-sm"
// 													>
// 														<RotateCcw className="mr-1 w-3 h-3" />
// 														Reset
// 													</Button>
// 													<Button
// 														size="sm"
// 														onClick={runJavaCode}
// 														disabled={isRunning}
// 														className="bg-[#0e639c] hover:bg-[#1177bb] h-8 text-white text-sm"
// 													>
// 														<Play className="mr-1 w-3 h-3" />
// 														{isRunning ? "Running..." : "Run Code"}
// 													</Button>
// 												</div>
// 											</div>
// 											<Textarea
// 												value={javaCode}
// 												onChange={(e) => setJavaCode(e.target.value)}
// 												className="flex-1 bg-[#1e1e1e] border-[#3e3e42] min-h-[400px] font-mono text-[#cccccc] text-sm resize-none"
// 												placeholder="Write your Java code here..."
// 											/>
// 										</div>

// 										{/* Output Console */}
// 										<div className="flex flex-col">
// 											<div className="flex justify-between items-center mb-2">
// 												<h4 className="font-medium text-[#cccccc] text-base">
// 													Console Output
// 												</h4>
// 												<Button
// 													size="sm"
// 													variant="outline"
// 													onClick={() => setOutput("")}
// 													className="hover:bg-[#2d2d30] border-[#3e3e42] h-8 text-[#cccccc] text-sm"
// 												>
// 													Clear
// 												</Button>
// 											</div>
// 											<div className="flex-1 bg-[#1e1e1e] p-3 border border-[#3e3e42] rounded-sm min-h-[400px]">
// 												<pre className="font-mono text-[#4ec9b0] text-sm whitespace-pre-wrap">
// 													{output || "Click 'Run Code' to see output here..."}
// 												</pre>
// 											</div>
// 										</div>
// 									</div>
// 								)}

// 								{/* Other content types remain the same */}
// 								{selectedResource.type === "video" && (
// 									<div className="flex justify-center items-center bg-[#1e1e1e] border border-[#3e3e42] rounded-sm aspect-video">
// 										<Button className="bg-[#0e639c] hover:bg-[#1177bb] text-white">
// 											<Play className="mr-2 w-4 h-4" />
// 											Play Video ({selectedResource.duration})
// 										</Button>
// 									</div>
// 								)}

// 								{selectedResource.type === "document" && (
// 									<div className="bg-[#1e1e1e] p-8 border-[#569cd6] border-2 border-dashed rounded-sm text-center">
// 										<FileText className="mx-auto mb-3 w-12 h-12 text-[#569cd6]" />
// 										<h3 className="mb-2 font-medium text-[#cccccc] text-sm">
// 											{selectedResource.name}
// 										</h3>
// 										<p className="mb-3 text-[#969696] text-sm">
// 											{selectedResource.pages} pages • PDF Document
// 										</p>
// 										<Button
// 											size="sm"
// 											className="bg-[#0e639c] hover:bg-[#1177bb] text-white"
// 										>
// 											<Download className="mr-2 w-3 h-3" />
// 											Download PDF
// 										</Button>
// 									</div>
// 								)}

// 								{selectedResource.type === "code" && (
// 									<div className="space-y-3">
// 										<div className="bg-[#1e1e1e] p-4 border border-[#3e3e42] rounded-sm">
// 											<div className="flex justify-between items-center mb-3">
// 												<span className="text-[#4ec9b0] text-sm">
// 													{selectedResource.language} Code
// 												</span>
// 												<Button
// 													variant="outline"
// 													size="sm"
// 													className="hover:bg-[#2d2d30] border-[#3e3e42] h-8 text-[#cccccc] text-sm"
// 												>
// 													<Download className="mr-1 w-3 h-3" />
// 													Download
// 												</Button>
// 											</div>
// 											<pre className="overflow-x-auto text-[#4ec9b0] text-sm">
// 												<code>{`// ${selectedResource.name}
// #include <Servo.h>

// Servo myServo;
// int servoPin = 9;
// int potPin = A0;

// void setup() {
//   myServo.attach(servoPin);
//   Serial.begin(9600);
//   Serial.println("Robot systems online!");
// }

// void loop() {
//   int potValue = analogRead(potPin);
//   int angle = map(potValue, 0, 1023, 0, 180);
//   myServo.write(angle);
  
//   Serial.print("Servo angle: ");
//   Serial.println(angle);
//   delay(15);
// }`}</code>
// 											</pre>
// 										</div>
// 									</div>
// 								)}

// 								{selectedResource.type === "assignment" && (
// 									<div className="space-y-4">
// 										<div className="bg-[#2d2d30] p-4 border border-[#3e3e42] rounded-sm">
// 											<div className="flex justify-between items-center mb-2">
// 												<h4 className="font-medium text-[#dcdcaa] text-sm">
// 													Assignment Details
// 												</h4>
// 												<Badge
// 													variant={
// 														selectedResource.completed
// 															? "secondary"
// 															: "destructive"
// 													}
// 													className="bg-[#5a1e1e] border-[#8b2635] text-[#f48771] text-sm"
// 												>
// 													{selectedResource.completed
// 														? "Completed"
// 														: `Due: ${selectedResource.dueDate}`}
// 												</Badge>
// 											</div>
// 											<p className="text-[#cccccc] text-base">
// 												{selectedResource.description}
// 											</p>
// 										</div>

// 										{!selectedResource.completed && (
// 											<div className="bg-[#1e1e1e] p-6 border-[#569cd6] border-2 border-dashed rounded-sm text-center">
// 												<Zap className="mx-auto mb-3 w-8 h-8 text-[#dcdcaa]" />
// 												<h3 className="mb-2 font-medium text-[#cccccc] text-sm">
// 													Submit Your Work
// 												</h3>
// 												<p className="mb-4 text-[#969696] text-sm">
// 													Upload your assignment files or provide a project
// 													link.
// 												</p>
// 												<div className="space-y-2">
// 													<Button
// 														size="sm"
// 														className="bg-[#0e4f1c] hover:bg-[#14532d] text-[#4ec9b0]"
// 													>
// 														<CheckCircle className="mr-2 w-3 h-3" />
// 														Mark Complete
// 													</Button>
// 													<Button
// 														variant="outline"
// 														size="sm"
// 														className="hover:bg-[#2d2d30] border-[#3e3e42] text-[#cccccc]"
// 													>
// 														<Download className="mr-2 w-3 h-3" />
// 														Upload Files
// 													</Button>
// 													<Button
// 														variant="outline"
// 														size="sm"
// 														className="hover:bg-[#2d2d30] border-[#3e3e42] text-[#cccccc]"
// 													>
// 														Add Project Link
// 													</Button>
// 												</div>
// 											</div>
// 										)}
// 									</div>
// 								)}

// 								{/* Action Buttons */}
// 								{selectedResource.type !== "playground" &&
// 									selectedResource.type !== "guide" && (
// 										<div className="flex space-x-2 pt-4 border-[#3e3e42] border-t">
// 											{!selectedResource.completed && (
// 												<Button
// 													size="sm"
// 													className="bg-[#0e4f1c] hover:bg-[#14532d] text-[#4ec9b0]"
// 												>
// 													<CheckCircle className="mr-2 w-3 h-3" />
// 													Mark Complete
// 												</Button>
// 											)}
// 											<Button
// 												variant="outline"
// 												size="sm"
// 												className="hover:bg-[#2d2d30] border-[#3e3e42] text-[#cccccc]"
// 											>
// 												<Download className="mr-2 w-3 h-3" />
// 												Download
// 											</Button>
// 										</div>
// 									)}
// 							</CardContent>
// 						</Card>
// 					) : selectedModule ? (
// 						// Module View
// 						<Card className="bg-[#252526] border border-[#3e3e42]">
// 							<CardHeader className="p-6 border-[#3e3e42] border-b">
// 								<div className="flex items-center space-x-3">
// 									<Cpu className="w-6 h-6 text-[#569cd6]" />
// 									<div>
// 										<CardTitle className="text-[#cccccc] text-xl">
// 											{selectedModule.name}
// 										</CardTitle>
// 										<p className="mt-1 text-[#969696] text-base">
// 											{selectedModule.resources.length} resources •{" "}
// 											{currentCourseData.name}
// 										</p>
// 									</div>
// 								</div>
// 							</CardHeader>
// 							<CardContent className="p-6">
// 								<div className="space-y-6">
// 									<div className="bg-[#2d2d30] p-4 border border-[#3e3e42] rounded-sm">
// 										<h3 className="mb-3 font-medium text-[#cccccc] text-lg">
// 											Module Overview
// 										</h3>
// 										<p className="text-[#cccccc] text-base leading-relaxed">
// 											{getModuleDescription(selectedModule.id)}
// 										</p>
// 									</div>

// 									<div>
// 										<h3 className="mb-4 font-medium text-[#cccccc] text-lg">
// 											Learning Resources
// 										</h3>
// 										<div className="gap-4 grid grid-cols-1 md:grid-cols-2">
// 											{selectedModule.resources.map((resource) => (
// 												<Card
// 													key={resource.id}
// 													className="bg-[#2d2d30] border border-[#3e3e42] hover:border-[#569cd6] transition-colors cursor-pointer"
// 													onClick={() => setSelectedResource(resource)}
// 												>
// 													<CardContent className="p-4">
// 														<div className="flex items-start space-x-3">
// 															<div className="flex-shrink-0 mt-1">
// 																{getResourceIcon(resource.type)}
// 															</div>
// 															<div className="flex-1 min-w-0">
// 																<div className="flex justify-between items-center mb-2">
// 																	<h4 className="font-medium text-[#cccccc] text-base truncate">
// 																		{resource.name}
// 																	</h4>
// 																	{resource.completed && (
// 																		<CheckCircle className="flex-shrink-0 w-4 h-4 text-[#4ec9b0]" />
// 																	)}
// 																</div>
// 																<p className="mb-3 text-[#969696] text-sm line-clamp-2">
// 																	{resource.description}
// 																</p>
// 																<div className="flex items-center space-x-3 text-[#969696] text-xs">
// 																	{resource.duration && (
// 																		<div className="flex items-center space-x-1">
// 																			<Clock className="w-3 h-3" />
// 																			<span>{resource.duration}</span>
// 																		</div>
// 																	)}
// 																	{resource.pages && (
// 																		<div className="flex items-center space-x-1">
// 																			<FileText className="w-3 h-3" />
// 																			<span>{resource.pages} pages</span>
// 																		</div>
// 																	)}
// 																	{resource.language && (
// 																		<div className="flex items-center space-x-1">
// 																			<Code className="w-3 h-3" />
// 																			<span>{resource.language}</span>
// 																		</div>
// 																	)}
// 																	{resource.dueDate && (
// 																		<div className="flex items-center space-x-1">
// 																			<Clock className="w-3 h-3" />
// 																			<span>Due: {resource.dueDate}</span>
// 																		</div>
// 																	)}
// 																	<Badge
// 																		className={`text-xs ${getResourceTypeBadgeColor(
// 																			resource.type,
// 																		)}`}
// 																	>
// 																		{resource.type.toUpperCase()}
// 																	</Badge>
// 																</div>
// 															</div>
// 														</div>
// 													</CardContent>
// 												</Card>
// 											))}
// 										</div>
// 									</div>

// 									<div className="bg-[#2d2d30] p-4 border border-[#3e3e42] rounded-sm">
// 										<h3 className="mb-3 font-medium text-[#cccccc] text-lg">
// 											Progress Summary
// 										</h3>
// 										<div className="gap-4 grid grid-cols-2 md:grid-cols-4">
// 											<div className="text-center">
// 												<div className="font-bold text-[#4ec9b0] text-2xl">
// 													{
// 														selectedModule.resources.filter((r) => r.completed)
// 															.length
// 													}
// 												</div>
// 												<div className="text-[#969696] text-sm">Completed</div>
// 											</div>
// 											<div className="text-center">
// 												<div className="font-bold text-[#f48771] text-2xl">
// 													{
// 														selectedModule.resources.filter((r) => !r.completed)
// 															.length
// 													}
// 												</div>
// 												<div className="text-[#969696] text-sm">Remaining</div>
// 											</div>
// 											<div className="text-center">
// 												<div className="font-bold text-[#dcdcaa] text-2xl">
// 													{
// 														selectedModule.resources.filter(
// 															(r) => r.type === "assignment",
// 														).length
// 													}
// 												</div>
// 												<div className="text-[#969696] text-sm">
// 													Assignments
// 												</div>
// 											</div>
// 											<div className="text-center">
// 												<div className="font-bold text-[#569cd6] text-2xl">
// 													{Math.round(
// 														(selectedModule.resources.filter((r) => r.completed)
// 															.length /
// 															selectedModule.resources.length) *
// 															100,
// 													)}
// 													%
// 												</div>
// 												<div className="text-[#969696] text-sm">Progress</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</CardContent>
// 						</Card>
// 					) : (
// 						// Course View
// 						<Card className="bg-[#252526] border border-[#3e3e42]">
// 							<CardHeader className="p-6 border-[#3e3e42] border-b">
// 								<div className="flex items-center space-x-3">
// 									<BookOpen className="w-6 h-6 text-[#569cd6]" />
// 									<div>
// 										<CardTitle className="text-[#cccccc] text-xl">
// 											{currentCourseData.name}
// 										</CardTitle>
// 										<p className="mt-1 text-[#969696] text-base">
// 											{currentCourseData.modules.length} modules • Interactive
// 											Learning Experience
// 										</p>
// 									</div>
// 								</div>
// 							</CardHeader>
// 							<CardContent className="p-6">
// 								<div className="space-y-6">
// 									<div className="bg-[#2d2d30] p-4 border border-[#3e3e42] rounded-sm">
// 										<h3 className="mb-3 font-medium text-[#cccccc] text-lg">
// 											Course Overview
// 										</h3>
// 										<p className="text-[#cccccc] text-base leading-relaxed">
// 											{getCourseDescription(selectedCourse)}
// 										</p>
// 									</div>

// 									<div>
// 										<h3 className="mb-4 font-medium text-[#cccccc] text-lg">
// 											Course Modules
// 										</h3>
// 										<div className="gap-4 grid grid-cols-1 md:grid-cols-2">
// 											{currentCourseData.modules.map((module, index) => (
// 												<Card
// 													key={module.id}
// 													className="bg-[#2d2d30] border border-[#3e3e42] hover:border-[#569cd6] transition-colors cursor-pointer"
// 													onClick={() => setSelectedModule(module)}
// 												>
// 													<CardContent className="p-5">
// 														<div className="flex items-start space-x-3">
// 															<div className="flex-shrink-0">
// 																<div className="flex justify-center items-center bg-[#569cd6] bg-opacity-20 rounded-sm w-10 h-10">
// 																	<span className="font-bold text-[#569cd6] text-sm">
// 																		{index + 1}
// 																	</span>
// 																</div>
// 															</div>
// 															<div className="flex-1 min-w-0">
// 																<h4 className="mb-2 font-medium text-[#cccccc] text-base">
// 																	{module.name}
// 																</h4>
// 																<p className="mb-3 text-[#969696] text-sm line-clamp-2">
// 																	{getModuleDescription(module.id)}
// 																</p>
// 																<div className="flex justify-between items-center">
// 																	<div className="flex items-center space-x-3 text-[#969696] text-xs">
// 																		<div className="flex items-center space-x-1">
// 																			<FileText className="w-3 h-3" />
// 																			<span>
// 																				{module.resources.length} resources
// 																			</span>
// 																		</div>
// 																		<div className="flex items-center space-x-1">
// 																			<CheckCircle className="w-3 h-3" />
// 																			<span>
// 																				{
// 																					module.resources.filter(
// 																						(r) => r.completed,
// 																					).length
// 																				}{" "}
// 																				completed
// 																			</span>
// 																		</div>
// 																	</div>
// 																	<div className="font-medium text-[#569cd6] text-xs">
// 																		{Math.round(
// 																			(module.resources.filter(
// 																				(r) => r.completed,
// 																			).length /
// 																				module.resources.length) *
// 																				100,
// 																		)}
// 																		%
// 																	</div>
// 																</div>
// 															</div>
// 														</div>
// 													</CardContent>
// 												</Card>
// 											))}
// 										</div>
// 									</div>

// 									<div className="bg-[#2d2d30] p-4 border border-[#3e3e42] rounded-sm">
// 										<h3 className="mb-3 font-medium text-[#cccccc] text-lg">
// 											Course Statistics
// 										</h3>
// 										<div className="gap-4 grid grid-cols-2 md:grid-cols-4">
// 											<div className="text-center">
// 												<div className="font-bold text-[#569cd6] text-2xl">
// 													{currentCourseData.modules.length}
// 												</div>
// 												<div className="text-[#969696] text-sm">Modules</div>
// 											</div>
// 											<div className="text-center">
// 												<div className="font-bold text-[#4ec9b0] text-2xl">
// 													{currentCourseData.modules.reduce(
// 														(acc, module) => acc + module.resources.length,
// 														0,
// 													)}
// 												</div>
// 												<div className="text-[#969696] text-sm">Resources</div>
// 											</div>
// 											<div className="text-center">
// 												<div className="font-bold text-[#dcdcaa] text-2xl">
// 													{currentCourseData.modules.reduce(
// 														(acc, module) =>
// 															acc +
// 															module.resources.filter(
// 																(r) => r.type === "assignment",
// 															).length,
// 														0,
// 													)}
// 												</div>
// 												<div className="text-[#969696] text-sm">
// 													Assignments
// 												</div>
// 											</div>
// 											<div className="text-center">
// 												<div className="font-bold text-[#f48771] text-2xl">
// 													{Math.round(
// 														(currentCourseData.modules.reduce(
// 															(acc, module) =>
// 																acc +
// 																module.resources.filter((r) => r.completed)
// 																	.length,
// 															0,
// 														) /
// 															currentCourseData.modules.reduce(
// 																(acc, module) => acc + module.resources.length,
// 																0,
// 															)) *
// 															100,
// 													)}
// 													%
// 												</div>
// 												<div className="text-[#969696] text-sm">
// 													Overall Progress
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</CardContent>
// 						</Card>
// 					)}

}
