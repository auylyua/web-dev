from models import Vehicle, Car, Motorcycle, Truck


def print_separator(title=""):
    if title:
        print(f"\n{'='*60}")
        print(f"  {title}")
        print(f"{'='*60}")
    else:
        print(f"{'-'*60}")


def main():
    print_separator("VEHICLE MANAGEMENT SYSTEM - OOP DEMONSTRATION")
    
    print_separator("Creating Vehicle Objects")
    
    car1 = Car("Toyota", "Camry", 2022, mileage=5000, num_doors=4, fuel_type="Hybrid")
    print(f"Created: {car1}")
    
    car2 = Car("Tesla", "Model 3", 2023, mileage=1200, num_doors=4, fuel_type="Electric")
    print(f"Created: {car2}")
    
    motorcycle1 = Motorcycle("Harley-Davidson", "Street 750", 2021, mileage=3500, 
                            engine_cc=750, bike_type="Cruiser")
    print(f"Created: {motorcycle1}")
    
    motorcycle2 = Motorcycle("Kawasaki", "Ninja 400", 2023, mileage=800, 
                            engine_cc=400, bike_type="Sport")
    print(f"Created: {motorcycle2}")
    
    truck1 = Truck("Ford", "F-150", 2022, mileage=8000, cargo_capacity=2000, drivetrain="4WD")
    print(f"Created: {truck1}")
    
    truck2 = Truck("Chevrolet", "Silverado", 2023, mileage=1500, cargo_capacity=2200, drivetrain="AWD")
    print(f"Created: {truck2}")
    
    print_separator("Creating Fleet of Vehicles")
    
    fleet = [car1, car2, motorcycle1, motorcycle2, truck1, truck2]
    
    print(f"Total vehicles in fleet: {len(fleet)}")
    print("\nFleet Roster:")
    for i, vehicle in enumerate(fleet, 1):
        print(f"  {i}. {vehicle}")
    
    print_separator("Polymorphism: get_info() Method")
    
    print("Calling get_info() on all vehicles (same method, different implementations):\n")
    for vehicle in fleet:
        print(f"  • {vehicle.get_info()}")
    
    print_separator("Method Overriding: drive() Method")
    
    print("Regular vehicle drive():")
    print(f"  {car1.drive(50)}")
    
    print("\nMotorcycle overridden drive():")
    print(f"  {motorcycle1.drive(50)}")
    
    print("\nBoth inherited from Vehicle but behave differently!")
    
    print_separator("Class-Specific Methods")
    
    print("Car methods:")
    print(f"  {car1.honk()}")
    print(f"  {car2.honk()}")
    
    print("\nMotorcycle methods:")
    print(f"  {motorcycle1.rev_engine()}")
    print(f"  {motorcycle2.rev_engine()}")
    
    print("\nTruck methods:")
    print(f"  {truck1.load_cargo(500)}")
    print(f"  {truck1.load_cargo(800)}")
    print(f"  {truck1.load_cargo(1000)}")
    print(f"  Current status: {truck1}")
    print(f"  {truck1.unload_cargo()}")
    print(f"  After unloading: {truck1}")
    
    print_separator("Fleet Activity: Everyone Drives 100 Miles")
    
    for vehicle in fleet:
        print(f"\n{vehicle.get_info()}")
        print(f"  {vehicle.drive(100)}")
    
    print_separator("Final Fleet Status")
    
    total_mileage = 0
    for i, vehicle in enumerate(fleet, 1):
        print(f"{i}. {vehicle}")
        total_mileage += vehicle.mileage
    
    print(f"\nTotal fleet mileage: {total_mileage:,.0f} miles")
    print(f"Average mileage per vehicle: {total_mileage/len(fleet):,.0f} miles")
    
    print_separator("Type Checking with isinstance()")
    
    print("Counting vehicle types in fleet:")
    car_count = sum(1 for v in fleet if isinstance(v, Car))
    motorcycle_count = sum(1 for v in fleet if isinstance(v, Motorcycle))
    truck_count = sum(1 for v in fleet if isinstance(v, Truck))
    
    print(f"  Cars: {car_count}")
    print(f"  Motorcycles: {motorcycle_count}")
    print(f"  Trucks: {truck_count}")
    
    vehicle_count = sum(1 for v in fleet if isinstance(v, Vehicle))
    print(f"  All Vehicles: {vehicle_count}")
    
    print_separator()
    print("✓ OOP Demonstration Complete!")
    print_separator()


if __name__ == "__main__":
    main()