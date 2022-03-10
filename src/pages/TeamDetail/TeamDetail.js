import React, { useEffect, useState } from "react";
import Banner_bg from "../Banner_bg/Banner_bg";
import bg from "../../assets/images/main_images/secondStatistics_images/SS_bg.png";
import ourTeam_bg1 from "../../assets/images/main_images/ourTeam_images/ourTeam_bg1.png";
import contact1 from "../../assets/images/pages_images/teamDetal_images/teamD_contact1.svg";
import contact2 from "../../assets/images/pages_images/teamDetal_images/teamD_contact2.svg";
import contact3 from "../../assets/images/pages_images/teamDetal_images/teamD_contact3.svg";

import dots from "../../assets/images/main_images/statistics_images/statistics_dots.png";

import Serviceforbusiness from "../Serviceforbusiness/Serviceforbusiness";
import "./TeamDetail.css";
import { useParams } from "react-router-dom";
import { $host } from "../../http";
import { CircularProgress } from "@mui/material";

function TeamDetail() {
  const [onePerson, setOnePerson] = useState({});
  const [loading, setLoading] = useState(true);
  const [bgData, setBgData] = useState({});

  const { id } = useParams();

  const getBannerBg = async () => {
    await $host.get(`en/api/background-team/`).then(({ data }) => {
      setBgData(data[0]);
    });
  };

  const getOnePerson = async () => {
    await $host
      .get(`en/api/team/${id}`)
      .then(({ data }) => {
        setOnePerson(data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getBannerBg();
    getOnePerson();
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return (
      <div className="loading--block">
        <CircularProgress color="error" />
      </div>
    );
  }

  return (
    <div className="teamDetail">
      <Banner_bg title={onePerson.title} bg={bgData.image} />
      <div className="teamDetail__container">
        <div className="teamDetail__content">
          <div className="teamDetail__left">
            <div className="teamDetail__item">
              <div className="teamDetail__img">
                <img src={onePerson.image} alt="" />
              </div>

              <div className="teamDetail__item--bottom">
                <div className="teamDetail__name">{onePerson.title}</div>
                <div className="teamDetail__position">{onePerson.position}</div>
              </div>
            </div>

            <div className="teamDetail__contact">
              <div className="teamDetail__contact--title">CONTACT</div>
              <div className="teamDetail__contact--list">
                <p>
                  <img src={contact1} alt="" />
                  <span>Developer@mail.ru</span>
                </p>
                <p>
                  <img src={contact2} alt="" />
                  <span>111-222-3333</span>
                </p>
                <p>
                  <img src={contact3} alt="" />
                  <span>multix.com</span>
                </p>
              </div>
            </div>

            <div className="teamDetail__dots">
              <img src={dots} alt="" />
            </div>
          </div>
          <div className="teamDetail__right">
            <div className="teamDetail__description">
              Lorem ipsum dolor sit amet, an labores explicari qui, eu nostrum
              copiosae argumentum has. Latine propriae quo no, unum ridens
              expetenda id sit, at usu eius eligendi singulis. Sea ocurreret
              principes ne. At nonumy aperiri pri, nam quodsi copiosae
              intellegebat et, ex deserunt euripidis usu. Per ad ullum lobortis.
              Duo volutpat imperdiet ut, postea salutatus imperdiet ut per, ad
              utinam debitis invenire has. Liber utroque vim an, ne his brute
              vivendo, est fabulas consetetur appellantur an. In dolore legendos
              quo, ne ferri noluisse sed. Tantas eligendi at ius. Purto ipsum
              nemore sit ad. Vix tale noluisse voluptua ad, ne brute altera
              democritum cum. Omnes ornatus qui et, te aeterno discere ocurreret
              sea. Tollit cetero cu usu, etiam evertitur id nec. Id pro unum
              pertinax oportere, vel ad ridens mollis. Ad ius meis suavitate
              voluptaria. Mei ut errem legimus periculis, eos liber epicurei
              necessitatibus eu, facilisi postulant vel no. Ad mea commune
              disputando, cu vel choro exerci. Pri et oratio iisque atomorum,
              enim detracto mei ne, id eos soleat iudicabit. Ne reque
              reformidans mei, rebum delicata consequuntur an sit. Sea ad audire
              utamur. Ut mei ridens minimum intellegat, perpetua euripidis te
              qui, ad consul intellegebat comprehensam eum. Ex vix alienum
              sadipscing, quod melius philosophia id has. Ad qui quem
              reprimique, quo possit detracto reprimique no, sint reque officiis
              ei per. Ea regione commune volutpat pro, fabulas facilis omnesque
              mei ne. Cu unum detracto comprehensam sea, ad vim ancillae
              principes, ex usu fugit consulatu. Vis te purto equidem
              voluptatum. Detracto contentiones te est, brute ipsum consul an
              vis. Mea ei regione blandit ullamcorper, definiebas constituam vix
              ei. At his ludus nonumes gloriatur. Ne vim tamquam nonumes
            </div>
          </div>
        </div>
      </div>
      <Serviceforbusiness />
    </div>
  );
}

export default TeamDetail;
