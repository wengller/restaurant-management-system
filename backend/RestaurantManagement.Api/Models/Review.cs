namespace RestaurantManagement.Api.Models
{
    public class Review
    {
        public int Id { get; set; }

        public string FullName { get; set; } = string.Empty;

        public int Rating { get; set; }

        public string Comment { get; set; } = string.Empty;

        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}