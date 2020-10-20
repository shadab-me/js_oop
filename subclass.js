class Node{
    constructor(data){
      this.data = data;
      this.next = null
    }
  }
  class LinkedList{
  constructor(head = null){
     this.head = head;
     this.tail = null;
     this.length = 0;
  
  }
  insert(value){
  let node = new Node(value);
  if(!this.head){
    this.head = node 
    this.tail = node;
  }else{
    this.tail.next = node;
    this.tail = node;
  }
  this.length++;
  }
  removeTail(){
   let currentNode = this.head;
   while(currentNode){
   if(currentNode !== this.tail){
       currentNode = currentNode.next;
   }
   }
   this.tail = currentNode   

  }
  }
  
  let item1 = new LinkedList();
  item1.insert(5);
  item1.insert(20);
  item1.insert(15);
  item1.insert(51);
  item1.insert(220);
  item1.insert(150);
  console.log(item1)
  