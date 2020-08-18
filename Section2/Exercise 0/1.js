function checkExam(array1, array2) {
  let totalMarks = 0;
  for(let i=0;i<array1.length;i+=1){
    if(array2[i]==""){
      continue;
    }
    if(array1[i]==array2[i]){
      totalMarks+=4;
    }else{
      totalMarks-=1;
    }
  }
  if(totalMarks<0){
    totalMarks = 0;
  }
  return totalMarks;
} 