"use client";

import { useEffect } from 'react';
import '../../../../styles/destination.css';
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import Image from 'next/image';

// Function to handle the left button click event
const handleLeftClick = () => {
  const activeGroup = document.querySelector('.card-group[data-status="active"]') as HTMLElement;
  let newIndex = parseInt(activeGroup.dataset.index as string) - 1;
  if (newIndex < 0) {
    newIndex = document.querySelectorAll('.card-group').length - 1;
  }
  switchGroup(newIndex);
};

// Function to handle the right button click event
const handleRightClick = () => {
  const activeGroup = document.querySelector('.card-group[data-status="active"]') as HTMLElement;
  let newIndex = parseInt(activeGroup.dataset.index as string) + 1;
  if (newIndex >= document.querySelectorAll('.card-group').length) {
    newIndex = 0;
  }
  switchGroup(newIndex);
};

// Function to switch the active group
const switchGroup = (newIndex: number) => {
  const groups = document.querySelectorAll('.card-group') as NodeListOf<HTMLElement>;
  groups.forEach(group => {
    group.dataset.status = 'unknown';
  });
  const newActiveGroup = document.querySelector(`.card-group[data-index="${newIndex}"]`) as HTMLElement;
  newActiveGroup.dataset.status = 'active';

  const texts = document.querySelectorAll('.container') as NodeListOf<HTMLElement>;
  texts.forEach(text => {
    text.dataset.status = 'unknown';
  });
  const newActiveText = document.querySelector(`.container[data-index-texts="${newIndex}"]`) as HTMLElement;
  newActiveText.dataset.status = 'active';
};

const FindAGuidePage: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Attach the event handlers to the buttons
      document.getElementById('left')?.addEventListener('click', handleLeftClick);
      document.getElementById('right')?.addEventListener('click', handleRightClick);

      // Handle "check" button click
      const checkButton = document.getElementById("check");
      if (checkButton) {
        checkButton.onclick = function() {
          (document.getElementById("all1") as HTMLElement).style.display = "none";
          (document.getElementById("textall0") as HTMLElement).style.display = "none";
          (document.getElementById("textall1") as HTMLElement).style.display = "block"; 
        };
      }

      // Handle flag clicks
      document.querySelectorAll('.flag1[data-index="1"]').forEach(flag => {
        flag.addEventListener('click', () => {
          (document.getElementById("textall1") as HTMLElement).style.display = "none";
          (document.getElementById("textall2EN") as HTMLElement).style.display = "block";
        });
      });

      document.querySelectorAll('.flag1[data-index="2"]').forEach(flag => {
        flag.addEventListener('click', () => {
          (document.getElementById("textall1") as HTMLElement).style.display = "none";
          (document.getElementById("textall2CN") as HTMLElement).style.display = "block";
        });
      });

      document.querySelectorAll('.flag1[data-index="3"]').forEach(flag => {
        flag.addEventListener('click', () => {
          (document.getElementById("textall1") as HTMLElement).style.display = "none";
          (document.getElementById("textall2TH") as HTMLElement).style.display = "block";
        });
      });

      // Function to handle CARD hover events
      const handleCardHover = (cardId: string, hoverContainerIds: string[]) => {
        const card = document.getElementById(cardId);
        const hoverContainers = hoverContainerIds.map(id => document.getElementById(id));

        if (card) {
          card.addEventListener('mouseover', () => {
            document.querySelectorAll('.card').forEach(c => {
              if (c.id !== cardId) {
                (c as HTMLElement).style.display = 'none';
              }
            });
            hoverContainers.forEach(hoverContainer => {
              if (hoverContainer) {
                hoverContainer.style.opacity = '1';
                hoverContainer.style.visibility = 'visible';
              }
            });
          });

          card.addEventListener('mouseout', () => {
            document.querySelectorAll('.card').forEach(c => {
              (c as HTMLElement).style.display = 'block';
            });
            hoverContainers.forEach(hoverContainer => {
              if (hoverContainer) {
                hoverContainer.style.opacity = '0';
                hoverContainer.style.visibility = 'hidden';
              }
            });
          });
        }
      };

      // Attach CARD hover event handlers
      const cardHoverConfigs = [
        { cardId: 'CARD1', hoverContainerIds: ['hoverImagesContainer', 'hoverImagesContainer2'] },
        { cardId: 'CARD2', hoverContainerIds: ['hoverImagesContainer5', 'hoverImagesContainer6'] },
        { cardId: 'CARD3', hoverContainerIds: ['hoverImagesContainer3', 'hoverImagesContainer4'] },
        { cardId: 'CARD4', hoverContainerIds: ['hoverImagesContainer', 'hoverImagesContainer2'] },
        { cardId: 'CARD5', hoverContainerIds: ['hoverImagesContainer5', 'hoverImagesContainer6'] },
        { cardId: 'CARD6', hoverContainerIds: ['hoverImagesContainer3', 'hoverImagesContainer4'] },
        { cardId: 'CARD7', hoverContainerIds: ['hoverImagesContainer', 'hoverImagesContainer2'] },
        { cardId: 'CARD8', hoverContainerIds: ['hoverImagesContainer5', 'hoverImagesContainer6'] },
        { cardId: 'CARD9', hoverContainerIds: ['hoverImagesContainer3', 'hoverImagesContainer4'] }
      ];

      cardHoverConfigs.forEach(config => {
        handleCardHover(config.cardId, config.hoverContainerIds);
      });

      // Handle trip type click
      document.querySelectorAll('.triptype1').forEach(type => {
        type.addEventListener('click', () => {
          (document.getElementById("textall2TH") as HTMLElement).style.display = "none";
          (document.getElementById("textall2CN") as HTMLElement).style.display = "none";
          (document.getElementById("textall2EN") as HTMLElement).style.display = "none";
        });
      });

      // Cleanup function
      return () => {
        // Remove the event listeners
        document.getElementById('left')?.removeEventListener('click', handleLeftClick);
        document.getElementById('right')?.removeEventListener('click', handleRightClick);

        if (checkButton) checkButton.onclick = null;

        document.querySelectorAll('.flag1[data-index="1"]').forEach(flag => {
          flag.removeEventListener('click', () => {
            (document.getElementById("textall1") as HTMLElement).style.display = "none";
            (document.getElementById("textall2EN") as HTMLElement).style.display = "block";
          });
        });
        document.querySelectorAll('.flag1[data-index="2"]').forEach(flag => {
          flag.removeEventListener('click', () => {
            (document.getElementById("textall1") as HTMLElement).style.display = "none";
            (document.getElementById("textall2CN") as HTMLElement).style.display = "block";
          });
        });
        document.querySelectorAll('.flag1[data-index="3"]').forEach(flag => {
          flag.removeEventListener('click', () => {
            (document.getElementById("textall1") as HTMLElement).style.display = "none";
            (document.getElementById("textall2TH") as HTMLElement).style.display = "block";
          });
        });

        cardHoverConfigs.forEach(config => {
          const card = document.getElementById(config.cardId);
          const hoverContainers = config.hoverContainerIds.map(id => document.getElementById(id));

          if (card) {
            card.removeEventListener('mouseover', () => {
              document.querySelectorAll('.card').forEach(c => {
                if (c.id !== config.cardId) {
                  (c as HTMLElement).style.display = 'none';
                }
              });
              hoverContainers.forEach(hoverContainer => {
                if (hoverContainer) {
                  hoverContainer.style.opacity = '1';
                  hoverContainer.style.visibility = 'visible';
                }
              });
            });

            card.removeEventListener('mouseout', () => {
              document.querySelectorAll('.card').forEach(c => {
                (c as HTMLElement).style.display = 'block';
              });
              hoverContainers.forEach(hoverContainer => {
                if (hoverContainer) {
                  hoverContainer.style.opacity = '0';
                  hoverContainer.style.visibility = 'hidden';
                }
              });
            });
          }
        });

        document.querySelectorAll('.triptype1').forEach(type => {
          type.removeEventListener('click', () => {
            (document.getElementById("textall2TH") as HTMLElement).style.display = "none";
            (document.getElementById("textall2CN") as HTMLElement).style.display = "none";
            (document.getElementById("textall2EN") as HTMLElement).style.display = "none";
          });
        });
      };
    }
  }, []);
    return (
        <>
<div id="dick-container">
  <div id="blob" />
  <div id="blur" />
  <div id="all1">
    <div className="card-swiper" id="cardall1">
      <div className="card-groups">
        <div className="card-group" data-index={0} data-status="active">
          <div className="little-card card"></div>
          <div className="big-card card"></div>
          <div className="little-card card"></div>
          <div className="big-card card"></div>
          <div className="little-card card"></div>
          <div className="big-card card"></div>
          <div className="little-card card"></div>
          <div className="big-card card"></div>
        </div>
        <div className="card-group" data-index={1} data-status="unknown">
          <div className="little-card card"></div>
          <div className="big-card card"></div>
          <div className="little-card card"></div>
          <div className="big-card card"></div>
          <div className="little-card card"></div>
          <div className="big-card card"></div>
          <div className="little-card card"></div>
          <div className="big-card card"></div>
        </div>
        <div className="card-group" data-index={2} data-status="unknown">
          <div className="little-card card"></div>
          <div className="big-card card"></div>
          <div className="little-card card"></div>
          <div className="big-card card"></div>
          <div className="little-card card"></div>
          <div className="big-card card"></div>
          <div className="little-card card"></div>
          <div className="big-card card"></div>
        </div>
      </div>
      <div>
        <div className="card-swiper-buttons">
          <button id="left" onClick={handleLeftClick}>
          <Image
          src="https://www.svgrepo.com/show/384737/rounded-square-left-direction.svg"
          width={400}
          height={300}
          className="object-cover rounded-lg shadow-md"
          alt="Left"
        />
</button>
<a>
  <button className="special-button" id="check">
  <Image
            src="https://www.svgrepo.com/show/506227/like.svg"
            width={400}
            height={300}
            className="object-cover rounded-lg shadow-md"
            alt="Check"
          />
  </button>
</a>
<button id="right" onClick={handleRightClick}>
<Image
          src="https://www.svgrepo.com/show/384732/rounded-square-arrow-right-direction.svg"
          width={400}
          height={300}
          className="object-cover rounded-lg shadow-md"
          alt="Right"
        />
</button>
        </div>
      </div>
    </div>
  </div>
  <div className="containers" id="textall0">
    <div className="container" data-index-texts={0} data-status="active">
      <div className="Text">
        <p>Phra Nakhon</p>
      </div>
      <div className="Paragraph">
        <p className="gay">
          Phra Nakhon (Thai: พระนคร, pronounced [pʰráʔ ná(ʔ).kʰɔ̄ːn]) is one of
          the 50 districts (khet) of Bangkok, Thailand. It is the central
          district of Bangkok, including Rattanakosin Island. Neighboring
          districts are, from the north, clockwise: Dusit, Pom Prap Sattru Phai,
          Samphanthawong, and across the Chao Phraya River, Thon Buri, Bangkok
          Yai, Bangkok Noi, and Bang Phlat.
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10961.386564197057!2d100.49360654316247!3d13.752597737085493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2991256a8a1ef%3A0x30100b25de24d90!2sPhra%20Nakhon%2C%20Bangkok!5e0!3m2!1sen!2sth!4v1717408493692!5m2!1sen!2sth"
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
    <div className="container" data-index-texts={1} data-status="unknown">
      <div className="Text">
        <p>Pathum Wan</p>
      </div>
      <div className="Paragraph">
        <p className="gay">
          Pathum Wan (Thai: ปทุมวัน, pronounced [pā.tʰūm.wān]) is one of the
          fifty districts (khet) of Bangkok, Thailand. It lies just beyond the
          old city boundary of Khlong Phadung Krung Kasem, and was a rural area
          on the eastern outskirts of the city when royal villas were built
          there in the late nineteenth century.
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15502.626160783342!2d100.53922226221601!3d13.739232118050436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed4051cca57%3A0x40100b25de289b0!2sPathum%20Wan%2C%20Bangkok%2010330!5e0!3m2!1sen!2sth!4v1717409213594!5m2!1sen!2sth"
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
    <div className="container" data-index-texts={2} data-status="unknown">
      <div className="Text">
        <p>Khlong San</p>
      </div>
      <div className="Paragraph">
        <p className="gay">
         Hellow World! Hellow World!Hellow World!Hellow World!Hellow World!Hellow World!Hellow World!Hellow World!Hellow World!Hellow World!Hellow World!
         Hellow World!Hellow World!Hellow World!Hellow World!Hellow World!Hellow World!Hellow World!
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31007.52131419444!2d100.48188391205342!3d13.722072446648594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e298e8dba300b3%3A0x30100b25de24ea0!2sKhlong%20San%2C%20Bangkok%2010600!5e0!3m2!1sen!2sth!4v1719051759494!5m2!1sen!2sth"
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </div>
  {/* Write your comments here */}
  <div id="textall1" className="page2">
    <div className="flag-groups">
      <div className="group" data-index={1}>
        <center>
          <p className="lang-name">English</p>
        </center>
        <div className="flag1" data-index={1} />
      </div>
      <div className="group" data-index={2}>
        <center>
          <p className="lang-name">中文</p>
        </center>
        <div className="flag1" data-index={2} />
      </div>
      <div className="group" data-index={3}>
        <center>
          <p className="lang-name">ไทย</p>
        </center>
        <div className="flag1" data-index={3} />
      </div>
    </div>
  </div>
  {/* Write your comments here */}
  <div id="textall2EN" className="page2">
    <div className="trip-groups">
      <div className="groupt" data-index={1} id="CARD1">
        <center>
          <p className="triptypename" data-index={1}>
            Exotic Foods
          </p>
        </center>
        <Link href="fpage">
          <button className="triptype1" data-index={1}>
            <div />
          </button>
          </Link>
      </div>
      <div className="groupt" data-index={2} id="CARD2">
        <center>
          <p className="triptypename" data-index={2}>
            Trip2thePAST
          </p>
        </center>
        <Link href="fpage">
          <button className="triptype1" data-index={2}>
            <div />
          </button>
          </Link>
      </div>
      <div className="groupt" data-index={3} id="CARD3">
        <center>
          <p className="triptypename" data-index={3}>
            Shopaholics
          </p>
        </center>
        <Link href="fpage">
          <button className="triptype1" data-index={3}>
            <div />
          </button>
          </Link>
      </div>
    </div>
  </div>
  {/* Write your comments here */}
  <div id="textall2CN" className="page2">
    <div className="trip-groups">
      <div className="groupt" data-index={1} id="CARD4">
        <center>
          <p className="triptypename" data-index={1}>
            街头食品
          </p>
        </center>
        <Link href="fpageCN">
          <button className="triptype1" data-index={1}>
            <div />
          </button>
          </Link>
      </div>
      <div className="groupt" data-index={2} id="CARD5">
        <center>
          <p className="triptypename" data-index={2}>
            历史性的旅行
          </p>
        </center>
        <Link href="fpageCN">
          <button className="triptype1" data-index={2}>
            <div />
          </button>
          </Link>
      </div>
      <div className="groupt" data-index={3} id="CARD6">
        <center>
          <p className="triptypename" data-index={3}>
            购物狂
          </p>
        </center>
        <Link href="fpageCN">
          <button className="triptype1" data-index={3}>
            <div />
          </button>
          </Link>
      </div>
    </div>
  </div>
  {/* Write your comments here */}
  <div id="textall2TH" className="page2">
    <div className="trip-groups">
      <div className="groupt" data-index={1} id="CARD7">
        <center>
          <p className="triptypename" data-index={1}>
            สตรีทฟู้ด
          </p>
        </center>
        <Link href="fpageTH">
          <button className="triptype1" data-index={1}>
            <div />
          </button>
        </Link>
      </div>
      <div className="groupt" data-index={2} id="CARD8">
        <center>
          <p className="triptypename" data-index={2}>
            ประวัติศาสตร์
          </p>
        </center>
        <Link href="fpageTH">
          <button className="triptype1" data-index={2}>
            <div />
          </button>
          </Link>
      </div>
      <div className="groupt" data-index={3} id="CARD9">
        <center>
          <p className="triptypename" data-index={3}>
            ซ็อปปิ้ง
          </p>
        </center>
        <Link href="fpageTH">
          <button className="triptype1" data-index={3}>
            <div />
          </button>
          </Link>
      </div>
    </div>
  </div>
  
  </div>

</>

    );
};

export default FindAGuidePage;
