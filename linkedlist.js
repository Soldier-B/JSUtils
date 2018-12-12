function LinkedList() {
    this.head = null;
}

LinkedList.prototype = {
    addFirst: function (value) {
        var node = new LinkedListNode(value);

        if (!this.head)
            node.prev = node.next = this.head = node;
        else {
            node.prev = this.head.prev;
            node.next = this.head;
            this.head.prev = node;
            node.prev.next = node;
            this.head = node;
        }

        return node;
    },
    addLast: function (value) {
        var node = new LinkedListNode(value);

        if (!this.head)
            node.prev = node.next = this.head = node;
        else {
            node.prev = this.head.prev;
            node.next = this.head;
            this.head.prev = node;
            node.prev.next = node;
        }
    },
    addBefore: function (value, before) {
        var node = new LinkedListNode(value);

        node.prev = before.prev;
        node.next = before;
        before.prev = node;
        node.prev.next = node;

        return node;
    },
    addAfter: function (value, after) {
        var node = new LinkedListNode(value);

        node.prev = after;
        node.next = after.next;
        after.next = node;
        node.next.prev = node;

        return node;
    },
    remove: function (node) {
        if (node == this.head)
            this.head = null;
        else {
            node.prev.next = node.next;
            node.next.prev = node.prev;
            node.prev = node.next = null;
        }
    },
    toArray: function () {
        var arr = [],
            node = this.head;

        if (node) {
            do {
                arr.push(node.value);
                node = node.next;
            } while (node != this.head);
        }

        return arr;
    }
};

function LinkedListNode(value) {
    this.prev = null;
    this.next = null;
    this.value = value;
}
