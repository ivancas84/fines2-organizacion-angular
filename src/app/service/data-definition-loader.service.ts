import { Injectable } from '@angular/core';

import { SessionStorageService } from '../core/service/storage/session-storage.service';
import { ParserService } from '../core/service/parser/parser.service';
import { DataDefinition } from '../core/class/data-definition';

import { PersonaDataDefinition } from '../class/data-definition/persona-data-definition';

@Injectable({
  providedIn: 'root'
})
export class DataDefinitionLoaderService {

  constructor(protected stg: SessionStorageService, protected parser: ParserService){ }

  get(name: string): DataDefinition {
    switch(name) {
      case "persona": { return new PersonaDataDefinition(this.stg, this.parser); }
    }
  }
}
