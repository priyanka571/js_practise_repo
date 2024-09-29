import java.util.Scanner;
public class Main{
    public static void main(String a[])
    {
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        int arr[] =new int[n];
        for(int i= 0;i<n;i++)
        {
            arr[i]= s.nextInt();
            System.out.println(arr[i]);
        }
        for(int k=0;k<n-1;k++)
        {
            for(int j=1;j<n;j++)
            {
                if(arr[k]>arr[j])
                {
                    int temp = arr[k];
                    arr[k]=arr[j];
                    arr[j]=temp;

                }
            }
        }
        for(int i=0;i<n;i++)
        {
            System.out.println(arr[i]);
        }

    }
}