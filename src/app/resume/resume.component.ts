import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'services/resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  resumeData: any;

  constructor(private resumeService: ResumeService) { }

  ngOnInit(): void {
    this.resumeService.getResumeData().subscribe(
      data => this.resumeData = data,
      error => console.error('Error fetching resume data', error)
    );
  }
}
