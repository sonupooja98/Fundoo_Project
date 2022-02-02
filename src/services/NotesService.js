import AxiosService from './AxiosService'


let baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api/';
const service = new AxiosService();

let headerConfig = {
  headers: {
    Authorization: localStorage.getItem('token')
  }
}



class NoteService {
  addNote(data) {
    return service.postMethod(`${baseUrl}notes/addNotes`, data, headerConfig)
  }
  getNote() {
    return service.getMethod(`${baseUrl}notes/getNotesList`, headerConfig)
  }
  changearchive(data) {
    return service.postMethod(`${baseUrl}notes/archiveNotes`, data, headerConfig);
  }
  getUpdatedNote(data){
    return service.postMethod(`${baseUrl}notes/updateNotes`,data,headerConfig)
  }
  colorChange(data) {
    return service.postMethod(`${baseUrl}notes/changesColorNotes`, data, headerConfig)
  }

  deleteNote(data) {
    return service.postMethod(`${baseUrl}notes/trashNotes`, data, headerConfig)
  }
  archiveNotes(){
    return service.getMethod(`${baseUrl}notes/getArchiveNotesList`,headerConfig)
  }
  trashNotes(){
    return service.getMethod(`${baseUrl}notes/getTrashNotesList`,headerConfig)
  }

}



export default NoteService





























// created: "2022-01-20T09:08:09.178Z"
// email: "wari@gmail.com"
// firstName: "rajashwari"
// id: "eb8Nj0RcfTCzGZg6HYpRwD2NnftyRTgSG60uwCdNebpnkoiGdcyw4iv97aM8m8b5"
// imageUrl: ""
// lastName: "halika"
// role: "user"
// ttl: 1209600
// userId: "61e926539cb8e60022b71f1d"