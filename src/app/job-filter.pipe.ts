import { Pipe, PipeTransform } from '@angular/core';
import { Job } from './models/job';

@Pipe({
  name: 'jobFilter'
})
export class JobFilterPipe implements PipeTransform {

  transform(jobs: Job[], title: string): Job[] {
    if (!jobs || !title){
        return jobs;
    }

      return jobs.filter(jobs => 
        jobs.title.toLowerCase().indexOf(title.toLowerCase()) !== -1);
  }

}
