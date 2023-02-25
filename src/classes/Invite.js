import { addDoc, doc, updateDoc } from "firebase/firestore";
import _ from "lodash";
import { auth, ColRefInv, colRefP } from "../firebase";
import { inviteMaxJoins } from "../globalVariables";

export class Invite {
  constructor(inviteId, player) {
    this.id = inviteId;
    this.maxJoins = inviteMaxJoins;
    this.room = [player];
    this.created_at = Date.now();
  }
  async publish() {
    await addDoc(ColRefInv, {
      id: this.id,
      maxJoins: this.maxJoins,
      created_at: this.created_at,
      room: this.room,
    });
    await updateDoc(doc(colRefP, auth.currentUser.uid), { hasInvite: true, inviteId: this.id });
  }
}