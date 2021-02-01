import React from 'react'
import './Accordian.css'
const Accordian =()=> {

    return (
        <div className="accordion">
            <div>
                <input type="checkbox" name="example_accordion" id="section1" class="accordion__input"/>
                <label for="section1" class="accordion__label">Section #1</label>
                <div class="accordion__content">
                    <p>Section #1</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sit reiciendis, ipsam quaerat,
                        aperiam perspiciatis ad ullam architecto impedit natus illo nostrum molestias voluptas earum a
                        voluptatibus fugiat fuga facere!
                    </p>
                </div>
            </div>
            <div>
                <input type="checkbox" name="example_accordion" id="section2" class="accordion__input"/>
                <label for="section2" class="accordion__label">Section #2</label>
                <div class="accordion__content">
                <p>Section #2</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sit reiciendis, ipsam quaerat,
                    aperiam perspiciatis ad ullam architecto impedit natus illo nostrum molestias voluptas earum a
                    voluptatibus fugiat fuga facere!
                </p>
                </div>
            </div>
            <div>
                <input type="checkbox" name="example_accordion" id="section3" class="accordion__input"/>
                <label for="section3" class="accordion__label">Section #3</label>
                <div class="accordion__content">
                <p>Section #3</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sit reiciendis, ipsam quaerat,
                    aperiam perspiciatis ad ullam architecto impedit natus illo nostrum molestias voluptas earum a
                    voluptatibus fugiat fuga facere!
                </p>
                </div>
            </div>
        </div>
    )
}

export default Accordian
