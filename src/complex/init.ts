import { EnhancedStore, ThunkDispatch } from "@reduxjs/toolkit";
import { fullEntity, tagChange } from "../slices/game.js";
import { GameTag, EntityType, GameState, Entity } from "../utils/enums.js";
import { blockEnd, blockStart } from "../slices/block.js";

export default {
  perform: function (store: EnhancedStore): void {
    store.dispatch(blockStart({ id: "GAME_SETUP" }));
    // this is where we would load each deck?

    // create the players?
    store.dispatch(fullEntity({ [GameTag.Type]: EntityType.Player }));
    store.dispatch(fullEntity({ [GameTag.Type]: EntityType.Player }));

    // @todo - i think i have to do something like this:
    // (store.dispatch as ThunkDispatch<any, any, any>)(fullEntity({ [GameTag.Type]: EntityType.Player } as Entity));

    // start the game?
    store.dispatch(tagChange({ id: '0', tag: GameTag.GameState, value: GameState.Loaded }));

    store.dispatch(blockEnd({ id: "GAME_START" }));
  },
  // could define things like triggers here too?
}
