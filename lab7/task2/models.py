class Vehicle:
    def __init__(self, make, model, year, mileage=0):
        self.make = make
        self.model = model
        self.year = year
        self.mileage = mileage
    
    def drive(self, distance):
        self.mileage += distance
        return f"The {self.make} {self.model} drove {distance} miles. Total mileage: {self.mileage}"
    
    def get_info(self):
        return f"{self.year} {self.make} {self.model}"
    
    def __str__(self):
        return f"{self.year} {self.make} {self.model} ({self.mileage} miles)"


class Car(Vehicle):
    def __init__(self, make, model, year, mileage=0, num_doors=4, fuel_type="Gasoline"):
        super().__init__(make, model, year, mileage)
        self.num_doors = num_doors
        self.fuel_type = fuel_type
    
    def honk(self):
        return "Beep beep! 🚗"
    
    def get_info(self):
        base_info = super().get_info()
        return f"{base_info} - {self.num_doors}-door {self.fuel_type} car"
    
    def __str__(self):
        return f"{super().__str__()} | {self.num_doors} doors, {self.fuel_type}"


class Motorcycle(Vehicle):
    def __init__(self, make, model, year, mileage=0, engine_cc=500, bike_type="Standard"):
        super().__init__(make, model, year, mileage)
        self.engine_cc = engine_cc
        self.bike_type = bike_type
    
    def rev_engine(self):
        return f"VROOOOM! 🏍️ ({self.engine_cc}cc engine roaring)"
    
    def get_info(self):
        base_info = super().get_info()
        return f"{base_info} - {self.bike_type} motorcycle ({self.engine_cc}cc)"
    
    def drive(self, distance):
        self.mileage += distance
        return f"The {self.make} {self.model} cruised {distance} miles on two wheels! Total mileage: {self.mileage}"
    
    def __str__(self):
        return f"{super().__str__()} | {self.bike_type}, {self.engine_cc}cc engine"


class Truck(Vehicle):
    def __init__(self, make, model, year, mileage=0, cargo_capacity=1000, drivetrain="4WD"):
        super().__init__(make, model, year, mileage)
        self.cargo_capacity = cargo_capacity
        self.drivetrain = drivetrain
        self.current_load = 0
    
    def load_cargo(self, weight):
        if self.current_load + weight <= self.cargo_capacity:
            self.current_load += weight
            return f"Loaded {weight} lbs. Current load: {self.current_load}/{self.cargo_capacity} lbs"
        else:
            return f"Cannot load {weight} lbs - exceeds capacity! Current: {self.current_load}/{self.cargo_capacity} lbs"
    
    def unload_cargo(self):
        unloaded = self.current_load
        self.current_load = 0
        return f"Unloaded {unloaded} lbs of cargo"
    
    def get_info(self):
        base_info = super().get_info()
        return f"{base_info} - {self.drivetrain} truck (capacity: {self.cargo_capacity} lbs)"
    
    def __str__(self):
        return f"{super().__str__()} | {self.drivetrain}, {self.cargo_capacity} lbs capacity, {self.current_load} lbs loaded"