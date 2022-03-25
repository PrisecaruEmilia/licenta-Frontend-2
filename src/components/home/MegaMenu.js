import React, { Component } from 'react';
import shoe_4 from '../../assets/images/shoe_4.png';
export class MegaMenu extends Component {
  constructor() {
    super();
    this.MegaMenu = this.MegaMenu.bind(this);
  }

  componentDidMount() {
    this.MegaMenu();
  }

  MegaMenu() {
    var acc = document.getElementsByClassName('megaMenuAccordion');
    var accNum = acc.length;
    var i;
    for (i = 0; i < accNum; i++) {
      acc[i].addEventListener('click', function () {
        this.classList.toggle('megaMenuActive');
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    }
  }
  render() {
    return (
      <div className="megaMenuHome">
        {' '}
        <div className="megaMenuAccordionMenuDiv">
          <div className="megaMenuAccordionMenuDivInside">
            <button className="megaMenuAccordion">
              <img className="megaMenuAccordionMenuIcon" src={shoe_4} />
              &nbsp; Men's Shoes
            </button>
            <div className="panel">
              <ul>
                <li>
                  <a href="#" className="megaMenuAccordionItem">
                    Mans Shoes 1
                  </a>
                </li>
                <li>
                  <a href="#" className="megaMenuAccordionItem">
                    Mans Shoes 2
                  </a>
                </li>
              </ul>
            </div>

            <button className="megaMenuAccordion">
              <img className="megaMenuAccordionMenuIcon" src={shoe_4} />
              &nbsp; Men's Shoes
            </button>
            <div className="panel">
              <ul>
                <li>
                  <a href="#" className="megaMenuAccordionItem">
                    Mans Shoes 1
                  </a>
                </li>
                <li>
                  <a href="#" className="megaMenuAccordionItem">
                    Mans Shoes 2
                  </a>
                </li>
              </ul>
            </div>

            <button className="megaMenuAccordion">
              <img className="megaMenuAccordionMenuIcon" src={shoe_4} />
              &nbsp; Men's Shoes
            </button>
            <div className="panel">
              <ul>
                <li>
                  <a href="#" className="megaMenuAccordionItem">
                    Mans Shoes 1
                  </a>
                </li>
                <li>
                  <a href="#" className="megaMenuAccordionItem">
                    Mans Shoes 2
                  </a>
                </li>
              </ul>
            </div>

            <button className="megaMenuAccordion">
              <img className="megaMenuAccordionMenuIcon" src={shoe_4} />
              &nbsp; Men's Shoes
            </button>
            <div className="panel">
              <ul>
                <li>
                  <a href="#" className="megaMenuAccordionItem">
                    Mans Shoes 1
                  </a>
                </li>
                <li>
                  <a href="#" className="megaMenuAccordionItem">
                    Mans Shoes 2
                  </a>
                </li>
              </ul>
            </div>

            <button className="megaMenuAccordion">
              <img className="megaMenuAccordionMenuIcon" src={shoe_4} />
              &nbsp; Men's Shoes
            </button>
            <div className="panel">
              <ul>
                <li>
                  <a href="#" className="megaMenuAccordionItem">
                    Mans Shoes 1
                  </a>
                </li>
                <li>
                  <a href="#" className="megaMenuAccordionItem">
                    Mans Shoes 2
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MegaMenu;
