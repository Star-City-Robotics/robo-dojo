export const dummyJava = `public class RobotController {
    public static void main(String[] args) {
        System.out.println("Robot systems initializing...");
        
        // Create a simple robot
        Robot myRobot = new Robot("SCAROB-01");
        myRobot.powerOn();
        myRobot.move(10, 5);
        myRobot.displayStatus();
    }
}

class Robot {
    private String name;
    private boolean powered;
    private int x, y;
    
    public Robot(String name) {
        this.name = name;
        this.powered = false;
        this.x = 0;
        this.y = 0;
    }
    
    public void powerOn() {
        this.powered = true;
        System.out.println(name + " is now powered on!");
    }
    
    public void move(int deltaX, int deltaY) {
        if (powered) {
            x += deltaX;
            y += deltaY;
            System.out.println(name + " moved to position (" + x + ", " + y + ")");
        } else {
            System.out.println("Error: Robot must be powered on to move!");
        }
    }
    
    public void displayStatus() {
        System.out.println("=== Robot Status ===");
        System.out.println("Name: " + name);
        System.out.println("Powered: " + (powered ? "ON" : "OFF"));
        System.out.println("Position: (" + x + ", " + y + ")");
        System.out.println("==================");
    }
}`;

const courseData2: Course = {
	name: "Fun Time Robot Stuff",
	modules: [
		{
			id: "install",
			name: "How to install stuff",
			resources: [
				{
					type: "video",
					completed: false,
					description: "some string yayy",
					duration: "10m",
					id: "how to install vscode",
					name: "How to Install VSCode",
				},
				{
					type: "guide",
					completed: false,
					description: "This document goes over how to set up git",
					id: "git-setup-fun-time-robot-stuff",
					content: ``,
				},
			],
		},
	],
};
type Module = {
	id: string;
	name: string;
	resources: Resource[];
};

type Course = {
	name: string;
	modules: Module[];
};
type Resource =
	| {
			id: string;
			name: string;
			type: "video";
			duration: string;
			completed: boolean;
			description: string;
	  }
	| {
			type: "guide";
			id: string;
			completed: boolean;
			description: string;
			content: string;
	  }
	| {
			type: "assignment";
			name: string;
			dueDate: string;
			completed: false;
			description: string;
	  }
	| {
			type: "document";
			id: string;
			name: string;
			pages: number;
			completed: boolean;
			description: string;
	  };

export const courseData = {
	"robo-basics": {
		name: "Robot Fundamentals",
		modules: [
			{
				id: "unit-alpha",
				name: "Basic Components",
				resources: [
					{
						id: "intro-vid",
						name: "Introduction to Robotics",
						type: "video",
						duration: "15 min",
						completed: true,
						description:
							"Overview of robotics history and applications in modern industry.",
					},
					{
						id: "components-guide",
						name: "Robot Components Guide",
						type: "guide",
						completed: true,
						description:
							"Interactive guide to robot hardware components with code examples.",
						content: `# Robot Components Guide

Welcome to the comprehensive guide on robot components! This guide will walk you through the essential hardware components that make up modern robots.

## Motors and Actuators

Motors are the muscles of your robot. Here's how to control a servo motor using Arduino:

\`\`\`arduino
#include <Servo.h>

Servo myServo;
int servoPin = 9;

void setup() {
  myServo.attach(servoPin);
  Serial.begin(9600);
}

void loop() {
  // Sweep from 0 to 180 degrees
  for (int pos = 0; pos <= 180; pos += 1) {
    myServo.write(pos);
    delay(15);
  }
  
  // Sweep back from 180 to 0 degrees
  for (int pos = 180; pos >= 0; pos -= 1) {
    myServo.write(pos);
    delay(15);
  }
}
\`\`\`

## Sensors

Sensors are the eyes and ears of your robot. Here's a Python example for reading sensor data:

\`\`\`python
import time
import random

class UltrasonicSensor:
    def __init__(self, trigger_pin, echo_pin):
        self.trigger_pin = trigger_pin
        self.echo_pin = echo_pin
        
    def get_distance(self):
        # Simulate ultrasonic sensor reading
        # In real implementation, this would use GPIO
        distance = random.uniform(5.0, 200.0)
        return round(distance, 2)
    
    def is_obstacle_detected(self, threshold=20.0):
        return self.get_distance() < threshold

# Usage example
sensor = UltrasonicSensor(trigger_pin=18, echo_pin=24)

for i in range(10):
    distance = sensor.get_distance()
    print(f"Distance: {distance} cm")
    
    if sensor.is_obstacle_detected():
        print("⚠️  Obstacle detected!")
    else:
        print("✅ Path clear")
    
    time.sleep(1)
\`\`\`

## Microcontrollers

The brain of your robot! Here's a TypeScript example for a robot control system:

\`\`\`ts
interface RobotConfig {
  name: string;
  maxSpeed: number;
  sensorCount: number;
}

class RobotController {
  private config: RobotConfig;
  private position: { x: number; y: number };
  private isActive: boolean;

  constructor(config: RobotConfig) {
    this.config = config;
    this.position = { x: 0, y: 0 };
    this.isActive = false;
  }

  public initialize(): void {
    console.log(\`Initializing \${this.config.name}...\`);
    this.isActive = true;
    console.log("Robot is now active!");
  }

  public move(deltaX: number, deltaY: number): void {
    if (!this.isActive) {
      throw new Error("Robot must be initialized before moving");
    }

    this.position.x += deltaX;
    this.position.y += deltaY;
    
    console.log(\`Moved to position (\${this.position.x}, \${this.position.y})\`);
  }

  public getStatus(): string {
    return \`Robot: \${this.config.name} | Position: (\${this.position.x}, \${this.position.y}) | Active: \${this.isActive}\`;
  }
}

// Usage
const robotConfig: RobotConfig = {
  name: "SCAROB-Explorer",
  maxSpeed: 100,
  sensorCount: 4
};

const robot = new RobotController(robotConfig);
robot.initialize();
robot.move(10, 5);
console.log(robot.getStatus());
\`\`\`

## Power Systems

Understanding power requirements is crucial for robot design. Here's a Java example for power management:

\`\`\`java
public class PowerManager {
    private double batteryCapacity; // in mAh
    private double currentVoltage;
    private double powerConsumption; // in mA
    
    public PowerManager(double capacity, double voltage) {
        this.batteryCapacity = capacity;
        this.currentVoltage = voltage;
        this.powerConsumption = 0.0;
    }
    
    public void addComponent(String name, double consumption) {
        this.powerConsumption += consumption;
        System.out.println("Added " + name + " - Power draw: " + consumption + "mA");
    }
    
    public double getEstimatedRuntime() {
        if (powerConsumption == 0) return Double.POSITIVE_INFINITY;
        return batteryCapacity / powerConsumption; // hours
    }
    
    public void displayPowerStatus() {
        System.out.println("=== Power Status ===");
        System.out.println("Battery: " + batteryCapacity + "mAh");
        System.out.println("Voltage: " + currentVoltage + "V");
        System.out.println("Total consumption: " + powerConsumption + "mA");
        System.out.println("Estimated runtime: " + 
                         String.format("%.2f", getEstimatedRuntime()) + " hours");
    }
}
\`\`\`

This guide provides the foundation for understanding robot components. Practice with the code examples and experiment with different configurations!`,
					},
					{
						id: "design-assignment",
						name: "Design Your First Robot",
						type: "assignment",
						dueDate: "Dec 28, 2024",
						completed: false,
						description:
							"Design and sketch your first robot concept with detailed specifications.",
					},
				],
			},
			{
				id: "unit-beta",
				name: "Sensors & Motors",
				resources: [
					{
						id: "sensors-vid",
						name: "Understanding Sensors",
						type: "video",
						duration: "20 min",
						completed: true,
						description:
							"Learn about different types of sensors used in robotics.",
					},
					{
						id: "sensor-programming",
						name: "Sensor Programming Guide",
						type: "guide",
						completed: false,
						description:
							"Learn how to program different types of sensors with practical examples.",
						content: `# Sensor Programming Guide

Sensors are crucial for robots to understand their environment. Let's explore different types of sensors and how to program them.

## Distance Sensors

### Ultrasonic Sensors
Ultrasonic sensors measure distance using sound waves:

\`\`\`arduino
const int trigPin = 9;
const int echoPin = 10;

void setup() {
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  Serial.begin(9600);
}

void loop() {
  long duration, distance;
  
  // Clear the trigPin
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  
  // Send 10 microsecond pulse
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  // Read the echoPin
  duration = pulseIn(echoPin, HIGH);
  
  // Calculate distance in cm
  distance = (duration * 0.034) / 2;
  
  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");
  
  delay(500);
}
\`\`\`

## Light Sensors

Programming a light-dependent resistor (LDR):

\`\`\`python
import time
import board
import analogio

class LightSensor:
    def __init__(self, pin):
        self.sensor = analogio.AnalogIn(pin)
    
    def read_light_level(self):
        # Convert 16-bit ADC reading to percentage
        raw_value = self.sensor.value
        percentage = (raw_value / 65535) * 100
        return round(percentage, 2)
    
    def is_dark(self, threshold=20):
        return self.read_light_level() < threshold
    
    def is_bright(self, threshold=80):
        return self.read_light_level() > threshold

# Usage
light_sensor = LightSensor(board.A0)

while True:
    light_level = light_sensor.read_light_level()
    print(f"Light level: {light_level}%")
    
    if light_sensor.is_dark():
        print("🌙 It's dark - turning on LED")
    elif light_sensor.is_bright():
        print("☀️ It's bright - LED not needed")
    else:
        print("🌤️ Moderate lighting")
    
    time.sleep(1)
\`\`\`

## Temperature Sensors

Reading temperature with a digital sensor:

\`\`\`ts
interface TemperatureReading {
  celsius: number;
  fahrenheit: number;
  timestamp: Date;
}

class TemperatureSensor {
  private sensorId: string;
  
  constructor(sensorId: string) {
    this.sensorId = sensorId;
  }
  
  public async readTemperature(): Promise<TemperatureReading> {
    // Simulate sensor reading
    const celsius = Math.random() * 40 + 10; // 10-50°C
    const fahrenheit = (celsius * 9/5) + 32;
    
    return {
      celsius: Math.round(celsius * 100) / 100,
      fahrenheit: Math.round(fahrenheit * 100) / 100,
      timestamp: new Date()
    };
  }
  
  public async monitorTemperature(duration: number): Promise<void> {
    console.log(\`Starting temperature monitoring for \${duration} seconds...\`);
    
    const startTime = Date.now();
    while (Date.now() - startTime < duration * 1000) {
      const reading = await this.readTemperature();
      console.log(\`[\${reading.timestamp.toLocaleTimeString()}] \${reading.celsius}°C / \${reading.fahrenheit}°F\`);
      
      if (reading.celsius > 35) {
        console.log("⚠️ High temperature detected!");
      }
      
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}

// Usage
const tempSensor = new TemperatureSensor("TEMP_01");
tempSensor.monitorTemperature(10);
\`\`\`

## Gyroscope and Accelerometer

Reading motion data for robot balance:

\`\`\`java
public class MotionSensor {
    private double[] acceleration = new double[3]; // x, y, z
    private double[] gyroscope = new double[3];    // roll, pitch, yaw
    
    public void readSensorData() {
        // Simulate sensor readings
        for (int i = 0; i < 3; i++) {
            acceleration[i] = (Math.random() - 0.5) * 20; // -10 to 10 m/s²
            gyroscope[i] = (Math.random() - 0.5) * 360;   // -180 to 180 degrees
        }
    }
    
    public boolean isRobotUpright() {
        // Check if robot is roughly upright based on Z-axis acceleration
        return Math.abs(acceleration[2] - 9.81) < 2.0; // Within 2 m/s² of gravity
    }
    
    public double getTiltAngle() {
        // Calculate tilt angle from accelerometer data
        return Math.atan2(acceleration[0], acceleration[2]) * 180 / Math.PI;
    }
    
    public void displayMotionData() {
        System.out.println("=== Motion Data ===");
        System.out.printf("Acceleration: X=%.2f, Y=%.2f, Z=%.2f m/s²%n", 
                         acceleration[0], acceleration[1], acceleration[2]);
        System.out.printf("Gyroscope: Roll=%.2f, Pitch=%.2f, Yaw=%.2f°%n", 
                         gyroscope[0], gyroscope[1], gyroscope[2]);
        System.out.printf("Tilt Angle: %.2f°%n", getTiltAngle());
        System.out.println("Robot Upright: " + (isRobotUpright() ? "Yes" : "No"));
    }
}
\`\`\`

These examples show how to interface with common robot sensors. Practice implementing these patterns in your own projects!`,
					},
					{
						id: "servo-assignment",
						name: "Servo Motor Lab",
						type: "assignment",
						dueDate: "Jan 5, 2025",
						completed: false,
						description: "Program servo motors for precise movement control.",
					},
				],
			},
			{
				id: "unit-gamma",
				name: "Programming & Control",
				resources: [
					{
						id: "programming-vid",
						name: "Robot Programming Basics",
						type: "video",
						duration: "25 min",
						completed: false,
						description:
							"Introduction to robot programming concepts and best practices.",
					},
					{
						id: "control-guide",
						name: "Control Systems Guide",
						type: "guide",
						completed: false,
						description:
							"Learn about PID controllers and feedback systems with code examples.",
						content: `# Control Systems Guide

Control systems are the brain of autonomous robots. Learn how to implement feedback control for precise robot behavior.

## PID Controllers

PID (Proportional-Integral-Derivative) controllers are fundamental to robot control:

\`\`\`java
public class PIDController {
    private double kp, ki, kd; // PID constants
    private double previousError = 0;
    private double integral = 0;
    private long lastTime = 0;
    
    public PIDController(double kp, double ki, double kd) {
        this.kp = kp;
        this.ki = ki;
        this.kd = kd;
        this.lastTime = System.currentTimeMillis();
    }
    
    public double calculate(double setpoint, double measured) {
        long currentTime = System.currentTimeMillis();
        double deltaTime = (currentTime - lastTime) / 1000.0; // Convert to seconds
        
        if (deltaTime <= 0) return 0;
        
        double error = setpoint - measured;
        
        // Proportional term
        double proportional = kp * error;
        
        // Integral term
        integral += error * deltaTime;
        double integralTerm = ki * integral;
        
        // Derivative term
        double derivative = (error - previousError) / deltaTime;
        double derivativeTerm = kd * derivative;
        
        // Calculate output
        double output = proportional + integralTerm + derivativeTerm;
        
        // Update for next iteration
        previousError = error;
        lastTime = currentTime;
        
        return output;
    }
    
    public void reset() {
        previousError = 0;
        integral = 0;
        lastTime = System.currentTimeMillis();
    }
}
\`\`\`

## Line Following Robot

Implementing a line-following algorithm:

\`\`\`python
import time

class LineFollowingRobot:
    def __init__(self):
        self.base_speed = 100
        self.pid = PIDController(kp=1.0, ki=0.1, kd=0.05)
        
    def read_line_sensors(self):
        # Simulate 5 line sensors returning values 0-1000
        # 0 = white surface, 1000 = black line
        sensors = [200, 800, 1000, 800, 200]  # Line in center
        return sensors
    
    def calculate_line_position(self, sensors):
        # Calculate weighted average to find line position
        total = sum(sensors)
        if total == 0:
            return 0  # No line detected
        
        weighted_sum = sum(i * sensors[i] for i in range(len(sensors)))
        position = weighted_sum / total
        
        # Normalize to -2 to +2 (center is 0)
        return position - 2
    
    def follow_line(self):
        sensors = self.read_line_sensors()
        line_position = self.calculate_line_position(sensors)
        
        // PID control to keep line at center (position = 0)
        correction = self.pid.calculate(setpoint=0, measured=line_position)
        
        // Calculate motor speeds
        left_speed = self.base_speed + correction
        right_speed = self.base_speed - correction
        
        // Constrain speeds to valid range
        left_speed = max(0, min(255, left_speed))
        right_speed = max(0, min(255, right_speed))
        
        print(f"Line position: {line_position:.2f}, "
              f"Left: {left_speed:.0f}, Right: {right_speed:.0f}")
        
        return left_speed, right_speed

class PIDController:
    def __init__(self, kp, ki, kd):
        self.kp = kp
        self.ki = ki
        self.kd = kd
        self.previous_error = 0
        self.integral = 0
        self.last_time = time.time()
    
    def calculate(self, setpoint, measured):
        current_time = time.time()
        delta_time = current_time - self.last_time
        
        if delta_time <= 0:
            return 0
        
        error = setpoint - measured
        
        // PID calculations
        proportional = self.kp * error
        self.integral += error * delta_time
        integral_term = self.ki * self.integral
        derivative = (error - self.previous_error) / delta_time
        derivative_term = self.kd * derivative
        
        output = proportional + integral_term + derivative_term
        
        self.previous_error = error;
        self.last_time = current_time;
        
        return output

# Usage
robot = LineFollowingRobot()
for _ in range(10):
    robot.follow_line()
    time.sleep(0.1)
\`\`\`

## State Machine Control

Implementing robot behavior with state machines:

\`\`\`ts
enum RobotState {
  IDLE = "idle",
  SEARCHING = "searching",
  FOLLOWING = "following",
  AVOIDING = "avoiding",
  STOPPED = "stopped"
}

interface SensorData {
  lineDetected: boolean;
  obstacleDistance: number;
  batteryLevel: number;
}

class RobotStateMachine {
  private currentState: RobotState;
  private stateStartTime: number;
  
  constructor() {
    this.currentState = RobotState.IDLE;
    this.stateStartTime = Date.now();
  }
  
  public update(sensors: SensorData): void {
    const timeInState = Date.now() - this.stateStartTime;
    
    switch (this.currentState) {
      case RobotState.IDLE:
        this.handleIdleState(sensors);
        break;
        
      case RobotState.SEARCHING:
        this.handleSearchingState(sensors, timeInState);
        break;
        
      case RobotState.FOLLOWING:
        this.handleFollowingState(sensors);
        break;
        
      case RobotState.AVOIDING:
        this.handleAvoidingState(sensors, timeInState);
        break;
        
      case RobotState.STOPPED:
        this.handleStoppedState(sensors);
        break;
    }
  }
  
  private handleIdleState(sensors: SensorData): void {
    if (sensors.batteryLevel < 20) {
      this.transitionTo(RobotState.STOPPED);
    } else if (sensors.lineDetected) {
      this.transitionTo(RobotState.FOLLOWING);
    } else {
      this.transitionTo(RobotState.SEARCHING);
    }
  }
  
  private handleSearchingState(sensors: SensorData, timeInState: number): void {
    console.log("🔍 Searching for line...");
    
    if (sensors.lineDetected) {
      this.transitionTo(RobotState.FOLLOWING);
    } else if (sensors.obstacleDistance < 20) {
      this.transitionTo(RobotState.AVOIDING);
    } else if (timeInState > 5000) { // 5 seconds
      console.log("Search timeout - stopping");
      this.transitionTo(RobotState.STOPPED);
    }
  }
  
  private handleFollowingState(sensors: SensorData): void {
    console.log("🚗 Following line...");
    
    if (!sensors.lineDetected) {
      this.transitionTo(RobotState.SEARCHING);
    } else if (sensors.obstacleDistance < 15) {
      this.transitionTo(RobotState.AVOIDING);
    }
  }
  
  private handleAvoidingState(sensors: SensorData, timeInState: number): void {
    console.log("⚠️ Avoiding obstacle...");
    
    if (sensors.obstacleDistance > 30) {
      this.transitionTo(RobotState.SEARCHING);
    } else if (timeInState > 3000) { // 3 seconds
      this.transitionTo(RobotState.STOPPED);
    }
  }
  
  private handleStoppedState(sensors: SensorData): void {
    console.log("🛑 Robot stopped");
    
    if (sensors.batteryLevel > 30) {
      this.transitionTo(RobotState.IDLE);
    }
  }
  
  private transitionTo(newState: RobotState): void {
    console.log(\`State transition: \${this.currentState} → \${newState}\`);
    this.currentState = newState;
    this.stateStartTime = Date.now();
  }
  
  public getCurrentState(): RobotState {
    return this.currentState;
  }
}

// Usage example
const robot = new RobotStateMachine();

// Simulate sensor readings
const sensorData: SensorData = {
  lineDetected: true,
  obstacleDistance: 50,
  batteryLevel: 85
};

robot.update(sensorData);
\`\`\`

These control system examples form the foundation of autonomous robot behavior. Experiment with different parameters and combine multiple control strategies!`,
					},
					{
						id: "control-playground",
						name: "Control Algorithm Lab",
						type: "playground",
						completed: false,
						description:
							"Experiment with PID controllers and feedback systems in Java.",
					},
				],
			},
		],
	},
	"advanced-programming": {
		name: "Advanced Programming",
		modules: [
			{
				id: "unit-alpha",
				name: "ROS Fundamentals",
				resources: [
					{
						id: "ros-intro",
						name: "Introduction to ROS",
						type: "video",
						duration: "30 min",
						completed: false,
						description:
							"Getting started with Robot Operating System framework.",
					},
					{
						id: "ros-setup",
						name: "ROS Installation Guide",
						type: "document",
						pages: 12,
						completed: false,
						description: "Step-by-step guide to installing ROS on your system.",
					},
					{
						id: "ros-playground",
						name: "ROS Java Playground",
						type: "playground",
						completed: false,
						description: "Practice ROS concepts using Java implementations.",
					},
				],
			},
			{
				id: "unit-beta",
				name: "Path Planning",
				resources: [
					{
						id: "pathfinding-vid",
						name: "Pathfinding Algorithms",
						type: "video",
						duration: "35 min",
						completed: false,
						description:
							"Learn A* and Dijkstra algorithms for robot navigation.",
					},
					{
						id: "pathfinding-playground",
						name: "Pathfinding Algorithm Lab",
						type: "playground",
						completed: false,
						description: "Implement and test pathfinding algorithms in Java.",
					},
					{
						id: "nav-quest",
						name: "Navigation Project",
						type: "assignment",
						dueDate: "Jan 15, 2025",
						completed: false,
						description: "Build a robot that can navigate autonomously.",
					},
				],
			},
		],
	},
	"vision-systems": {
		name: "Computer Vision",
		modules: [
			{
				id: "unit-alpha",
				name: "Vision Basics",
				resources: [
					{
						id: "cv-intro",
						name: "Computer Vision Overview",
						type: "video",
						duration: "40 min",
						completed: false,
						description:
							"Introduction to computer vision concepts for robotics.",
					},
					{
						id: "vision-playground",
						name: "Image Processing Lab",
						type: "playground",
						completed: false,
						description: "Experiment with image processing algorithms in Java.",
					},
				],
			},
		],
	},
};
