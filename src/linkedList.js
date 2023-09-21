import Node from './node.js';

export default class LinkedList {
    constructor() {
        this.listHead = null
    }

    // Add value at the start of the list
    prepend(value) {
        let buffer = null; //Initiates buffer
        if (this.listHead != null) buffer = this.listHead; //Stores head of the list in buffer, if exist
        this.listHead = new Node(value); //Creates new node in head
        this.listHead.nextNode = buffer; //Links node from buffer to the new head
    }

    // Add value at the end of the list
    append(value) {
        if (this.listHead === null) this.prepend(value); //If list is empty adds value to the head
        else {
            let buffer = this.listHead; //Initiates buffer and stores node in the head
            while (buffer.nextNode != null) buffer = buffer.nextNode; //Iterates through the list until the end
            buffer.nextNode = new Node(value); //Creates new node and links it to the last node
        }
    }

    // Calculate the size of the list
    size() {
        let buffer = this.listHead; // Initiates buffer and stores the head node;
        let counter = 0; //Initiates counter and sets it to zero;
        while (buffer != null) { //Iterates through nodes from start to the end, increminating counter every iteration
            counter++;
            buffer = buffer.nextNode;
        }
        return counter; //returns counter value
    }

    // Return first node in the list
    head() {
        return this.listHead; //returns node stored in list as head
    }

    //Return last node in the list
    tail() {
        let buffer = this.listHead; //Initiates buffer and stores list head in it
        while (buffer.nextNode != null) buffer = buffer.nextNode; //Iterates through the list until hits the end
        return buffer; //Returns last node
    }

    //Return node in given index
    at(index) {
        let buffer = this.listHead; //initiates buffer and stores list head in it
        for (let i = 0; i < index; i++) { //iterates through the list until reach the given index
            buffer = buffer.nextNode;
            if (buffer === null) return 'There is no item in given index'; //return message if cannot reach index
        }
        return buffer; //if index is reached - returns node
    }

    // Remove last element from the list
    pop() {
        if (this.listHead === null) return 'The list is alredy empty';
        let buffer = this.listHead; //initiates buffer and stores list head in it
        let previous = null; //initiates empty value to store node
        while (buffer.nextNode != null) { //iterates through the list until hits the end
            previous = buffer;
            buffer = buffer.nextNode;
        }
        previous.nextNode = null; //unlinks last node from the second-to-last node to remove it
    }

    //Return index of node containing value or 'null' if not found
    find(value) {
        let buffer = this.listHead; //initiates buffer and stores the head of the list in it
        let index = 0; //initiates value to store index
        while (buffer != null) { //iterates through the list
            if (buffer.value === value) return index; //returns index if node value matches with given
            buffer = buffer.nextNode; //goes to the next node
            index++; //increments index
        }
        return null; //returns null if no value matches
    }

    //Return true if given value contained in list and false if not
    contains(value) {
        let buffer = this.listHead; //initiates buffer and stores the head of the list in it
        while (buffer != null) { //iterates through the list until hits end
            if (buffer.value === value) return true; //checks value of node and returns true if match, breaking loop
            buffer = buffer.nextNode;
        }
        return false; //return false if no node matches given value
    }

    //Represent node list in string
    toString() {
        let buffer = this.listHead; //initiates buffer and stores the head of the list in it
        let output = ""; //initiates empty string for output
        while (buffer != null) { //iterates through the list
            output += `(${buffer.value}) -> `; //format and adds node value to output string
            buffer = buffer.nextNode;
        }
        return (output + 'null'); //adds 'null' to the end of the output and returns string
    }

    //Insert new node with the provided value into given index
    insertAt(value, index) {
        if (this.listHead === null) this.prepend(value); //adds node contatining value at the head of the list if list is empty
        else if (index === 0) this.prepend(value);
        else {
            let buffer = this.listHead; //initiates buffer and stores the head of the list in it
            let previous = null; //initiates empty value to store node
            for (let i = 0; i < index; i++) { //iterates through list untill reach given index
                previous = buffer; //stores current node to previouss value
                buffer = buffer.nextNode; //goes to the next node
                if (buffer === null) break; //if index value bigger than list length - links new node to the last
            }
            const node = new Node(value); //creates new node with given value
            previous.nextNode = node; // links new node to the previous to occupy index
            node.nextNode = buffer; // links current node to the new one to maintain consistency
        }
    }

    //Remove node at the given index
    removeAt(index) {
        if (this.listHead === null) return 'This list is already empty'; //checks if list is empty and returns message if it is
        let buffer = this.listHead; //initiates buffer and stores the head of the list in it
        let previous = null; //initiates empty value to store node
        for (let i = 0; i < index; i++) { //iterates through list untill reach given index
            previous = buffer; //stores current node to previouss value
            buffer = buffer.nextNode; //goes to the next node
            if (buffer === null) return 'There is no item for this index'; //if index value bigger than list length returns message
        }
        previous.nextNode = buffer.nextNode; //links previous node to the node next to the current removing current nodee from the list
    }
}