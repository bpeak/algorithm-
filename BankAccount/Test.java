import java.util.concurrent.Semaphore;
import java.lang.Thread;
import java.lang.InterruptedException;

class BankAccount{
	int balence;
	Semaphore sem;
	Semaphore dsem;
	Semaphore wsem;
	BankAccount(){
		this.balence = 0;
		this.sem = new Semaphore(1);
		this.dsem = new Semaphore(0);
		this.wsem = new Semaphore(0);
	}
	public void withDraw(int n){
		try{
			this.wsem.acquire();
			this.sem.acquire();
		} catch ( InterruptedException e ){

		}
		///// critical section /////
		int temp = this.balence - n;
		System.out.println("-");
		this.balence = temp;
		///// critical section /////
		this.sem.release();
		this.dsem.release();
	}
	public void diposit(int n){
		try{
			this.sem.acquire();
		} catch ( InterruptedException e ){

		}
		///// critical section /////
		int temp = this.balence + n;
		System.out.println("+");
		this.balence = temp;
		///// critical section /////
		this.sem.release();
		this.wsem.release();
		try{
			this.dsem.acquire();
		} catch ( InterruptedException e ){

		}
	}
	public int getBalence(){
		return this.balence;
	}
}

class Parent extends Thread {
	BankAccount b;
	public Parent(BankAccount b){
		this.b = b;
	}
	@Override
	public void run(){
		for(int i = 0; i < 1000; i++){
			b.diposit(100);
		}
	}	
}

class Child extends Thread {
	BankAccount b;
	public Child(BankAccount b){
		this.b = b;
	}
	@Override
	public void run(){
		for(int i = 0; i < 1000; i++){
			b.withDraw(100);
		}
	}	
}

public class Test {
	public static void main(String[] args){
		BankAccount b = new BankAccount();
		Thread p = new Parent(b);
		Thread c = new Child(b);
		c.start();
		p.start();

        try {
            c.join();
            p.join();
            System.out.println(b.getBalence());
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
	}
}



