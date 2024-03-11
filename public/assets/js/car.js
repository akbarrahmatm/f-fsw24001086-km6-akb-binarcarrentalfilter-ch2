class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
            <div class="card cars-card">
                <img src="${this.image}" class="card-img-top cars-thumbnail">
                <div class="card-body">
                    <h5 class="card-title cars-type">${this.manufacture}/${this.model}</h5>
                    <h5 class="card-title cars-price">Rp ${this.rentPerDay} / hari</h5>
                    <p class="cars-description">${this.description}</p>
                    <div class="row cars-passenger">
                        <div class="col-1 cars-item-icon">
                            <img src="images/fi_users1.png" alt="" srcset="">
                        </div>
                        <div class="col-10 cars-item-description">
                            ${this.capacity} orang
                        </div>
                    </div>
                    <div class="row cars-transmission">
                        <div class="col-1 cars-item-icon">
                            <img src="images/fi_settings.png" alt="" srcset="">
                        </div>
                        <div class="col-10 cars-item-description">
                            ${this.transmission}
                        </div>
                    </div>
                    <div class="row cars-year">
                        <div class="col-1 cars-item-icon">
                            <img src="images/fi_calendar.png" alt="" srcset="">
                        </div>
                        <div class="col-10 cars-item-description">
                            Tahun ${this.year}
                        </div>
                    </div>

                    <a href="#" class="btn btn-success-custom" style="width:100%">Go somewhere</a>
                </div>
            </div>
        

      
    `;
  }
}
