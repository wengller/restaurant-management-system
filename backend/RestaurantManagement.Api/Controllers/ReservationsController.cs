using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RestaurantManagement.Api.Data;
using RestaurantManagement.Api.Models;

namespace RestaurantManagement.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ReservationsController : ControllerBase
{
    private readonly AppDbContext _context;

    public ReservationsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Reservation>>> GetReservations()
    {
        return await _context.Reservations.ToListAsync();
    }

    [HttpPost]
    public async Task<ActionResult<Reservation>> CreateReservation(Reservation reservation)
    {
        if (string.IsNullOrWhiteSpace(reservation.FullName))
            return BadRequest("Full name is required.");

        if (string.IsNullOrWhiteSpace(reservation.Email))
            return BadRequest("Email is required.");

        if (reservation.GuestCount <= 0)
            return BadRequest("Guest count must be greater than 0.");

        _context.Reservations.Add(reservation);
        await _context.SaveChangesAsync();

        return Ok(reservation);
    }
}