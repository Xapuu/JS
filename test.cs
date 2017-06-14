using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
 
namespace _04TrippleSum
{
    class Program
    {
        static void Main(string[] args)
        {

            int[] nums = Console.ReadLine().Trim().Split(new []{' '}, StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
            bool msg = true;
            for (int i = 0; i < nums.Length-1; i++)
            {
                for (int j = i+1; j < nums.Length; j++)
                {
                        for (int k = 0; k < nums.Length; k++)
                        {
                            if ((nums[i] + nums[j]) == nums[k])
                            {
                                Console.WriteLine(nums[i] + " + " + nums[j] + " == " + nums[k]);
                                msg=false;
                            }
                        }
                }
            }
            if (msg)
            {
                Console.WriteLine("No");
            }
        }
    }
}