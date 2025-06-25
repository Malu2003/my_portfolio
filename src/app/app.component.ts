import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'frontend';
  name = 'NIJI N';
  jobTitle = 'BTech Undergraduate Student at MITS Kochi';
  aboutText = 'I am a passionate BTech undergraduate student specializing in Computer Science and Artificial Intelligence at MITS Kochi. I have a keen interest in web development, particularly in creating dynamic and responsive applications using modern frameworks and technologies. My goal is to leverage my skills to build innovative solutions that enhance user experiences and solve real-world problems.';
  email = 'nijin.ai.tech@gmail.com';
  contactMessage = 'Have a project in mind? Let\'s create something amazing together!';
  
  linkedinUrl = 'https://www.linkedin.com/in/niji-n-775752274';
  githubUrl = 'https://github.com/Malu2003/';

  projects: Project[] = [
  {
    id: 1,
    title: 'Employee Management System - Full Stack',
    description: 'A comprehensive employee management system with CRUD operations, user profiles, posts management, and authentication. Built with Angular 17+ frontend and NestJS backend with MySQL database.',
    technologies: ['Angular 17+', 'NestJS', 'TypeScript', 'MySQL', 'TypeORM', 'REST API'],
    githubUrl: 'https://github.com/Malu2003/employee_management'
  },
  {
    id: 2,
    title: 'AI-Powered Resume Screening Tool',
    description: 'An intelligent resume analysis tool that uses Google Gemini AI to match resumes with job descriptions. Features include AI chatbot, match scoring, keyword analysis, and personalized recommendations.',
    technologies: ['Angular', 'NestJS', 'Google Gemini AI', 'TypeScript', 'PDF Parser', 'REST API'],
    githubUrl: 'https://github.com/Malu2003/resume-screener'
  },
  {
    id: 3,
    title: 'AI Sentiment Analysis Tool',
    description: 'A full-stack sentiment analysis application that analyzes public sentiment from social media platforms (Reddit, Hacker News, Mastodon) using Google Gemini AI for emotion detection and business insights.',
    technologies: ['Angular 18+', 'NestJS', 'Google Gemini AI', 'TypeScript', 'Social Media APIs', 'Data Visualization'],
    githubUrl: 'https://github.com/Malu2003/sentiment-analysis/'
  }]

  allSkills = [
    'Angular', 'TypeScript', 'Node.js', 'Express','Machine Learning','MySQL',
     'PostgreSQL', 'HTML', 'CSS', 'Git','Python', 'C', 'Django', 'REST APIs', 'Figma'
  ]
}