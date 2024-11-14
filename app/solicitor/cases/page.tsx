<command>// Update the button text and add upload functionality
<Button 
  variant="outline" 
  size="sm"
  onClick={() => handleReview(caseItem)}
>
  Review, Upload & Endorse
</Button>
<Button 
  variant="outline" 
  size="sm"
  onClick={() => handleUpload(caseItem)}
>
  <Upload className="h-4 w-4 mr-2" />
  Upload Document
</Button></command>