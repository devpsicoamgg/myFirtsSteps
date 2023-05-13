// Esta función copia los archivos de una carpeta origen a una carpeta maestra en google
function copyFolders() {
  // Obtiene la carpeta maestra y la carpeta origen
  let masterFolder = DriveApp.getFolderByName("Nombre de la carpeta maestra"); // DriveApp.getFolderById("ID MAESTRA")
  let  originFolder = DriveApp.getFolderByName("Nombre de la carpeta origen"); // DriveApp.getFolderById("ID MAESTRA")
  
  // Crea una nueva carpeta en la carpeta maestra con un nombre único
  let  folderCopy = masterFolder.createFolder(originFolder.getName() + "3");
  let idFolderCopy = folderCopy.getId();
  
  // Obtiene los archivos de la carpeta origen y los copia a la nueva carpeta 
  let originFiles = originFolder.getFiles();
  while(originFiles.hasNext()) {
   let nowFile = originFiles.next();
    let copyFile = nowFile.makeCopy();
    copyFile.setName(nowFile.getName() + "3");
    copyFile.moveTo(folderCopy);
  }
}





