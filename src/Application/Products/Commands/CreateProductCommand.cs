using MediatR;
using Domain.Entities;

namespace Application.Products.Commands
{
    public record CreateProductCommand(string Name, decimal Price) : IRequest<Product>;
}
