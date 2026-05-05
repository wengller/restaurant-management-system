namespace RestaurantManagement.Api.Models;

public class Reservation
{
    public int Id { get; set; }

    public string FullName { get; set; } = "";

    public string Email { get; set; } = "";

    public string Phone { get; set; } = "";

    public DateTime Date { get; set; }

    public string Time { get; set; } = "";

    public int GuestCount { get; set; }
}