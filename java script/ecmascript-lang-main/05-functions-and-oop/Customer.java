class Customer{
    private int id;
    private String name;
    private String address; 

    public Customer(int id, String name, String address){
        this.id = id;
        this.name = name;
        this.address = address;
    }

    public void print(){
        System.out.printf("id=%s, name=%s, address=%s \n",
            this.id, this.name, this.address);
    }
}

// Customer c1 = new Customer(1, 'Kasun', 'Galle');
// Customer c2 = new Customer(2, 'Nuwan', 'Galle');

// c1.print();
// c2.print();