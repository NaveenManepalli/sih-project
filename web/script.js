// Your existing code
function convertFunction() {
    // Trigger the hidden file input element to open the file dialog
    document.getElementById('file-input').click();
  }
  
  // Listen for file selection and handle it
  document.getElementById('file-input').addEventListener('change', function () {
    const selectedFile = this.files[0]; // Get the selected file
  
    if (selectedFile) {
      // You can access the selected file here and perform actions, such as uploading it to a server or processing it.
      console.log('Selected file:', selectedFile);
    } else {
      console.log('No file selected');
    }
  }
  

  const fileInput = document.getElementById('fileInput');
  const fileUploadContainer = document.querySelector('.file-upload-container');
  
  fileUploadContainer.addEventListener('dragover', (e) => {
    e.preventDefault();
    fileUploadContainer.style.backgroundColor = '#e0e0e0';
  });
  
  fileUploadContainer.addEventListener('dragleave', () => {
    fileUploadContainer.style.backgroundColor = 'transparent';
  });
  
  fileUploadContainer.addEventListener('drop', (e) => {
    e.preventDefault();
    fileUploadContainer.style.backgroundColor = 'transparent';
  
    const droppedFile = e.dataTransfer.files[0];
    fileInput.files = e.dataTransfer.files;
  
    handleFileUpload();
  });
  
  fileInput.addEventListener('change', handleFileUpload);
  
  function handleFileUpload() {
    const selectedFile = fileInput.files[0];
    if (selectedFile) {
      console.log(`Selected file: ${selectedFile.name}`);
      // Perform your file upload or processing here
    }
  }
  