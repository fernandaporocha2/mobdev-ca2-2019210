import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {

  episodes: Observable<any>;

  constructor(private router: Router, private api: ApiService) { }

  //Getting the episodes when the page is loaded
  ngOnInit() {
      this.episodes = this.api.getEpisodes();
  }

  //This function is called when the user clicks on a episode of the list
  //It will get the id of the selected episode and redirect it for loading the episode details
  openDetails(episode){
      let episodeId = episode.episode_id;
      this.router.navigateByUrl(`/tabs/episodes/${episodeId}`);
  }

}
