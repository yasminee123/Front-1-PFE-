import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/interfaces/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.scss']
})
export class ListeClientComponent implements OnInit {
  clt: Client[] = []
  constructor(private ser: ClientService) { }

  ngOnInit(): void {
    this.ser.getAllClients().subscribe(
      res=>{this.clt=res,console.log(res)},
      err=>console.log(err)
    )

  }

  

}
 