import React, { useRef, useEffect } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
// import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Layout } from '@components';
// import { Icon } from '@components/icons';

// const StyledTableContainer = styled.div`
//   margin: 100px -20px;

//   @media (max-width: 768px) {
//     margin: 50px -10px;
//   }

//   table {
//     width: 100%;
//     border-collapse: collapse;

//     .hide-on-mobile {
//       @media (max-width: 768px) {
//         display: none;
//       }
//     }

//     tbody tr {
//       &:hover,
//       &:focus {
//         background-color: var(--light-navy);
//       }
//     }

//     th,
//     td {
//       padding: 10px;
//       text-align: left;

//       &:first-child {
//         padding-left: 20px;

//         @media (max-width: 768px) {
//           padding-left: 10px;
//         }
//       }
//       &:last-child {
//         padding-right: 20px;

//         @media (max-width: 768px) {
//           padding-right: 10px;
//         }
//       }

//       svg {
//         width: 20px;
//         height: 20px;
//       }
//     }

//     tr {
//       cursor: default;

//       td:first-child {
//         border-top-left-radius: var(--border-radius);
//         border-bottom-left-radius: var(--border-radius);
//       }
//       td:last-child {
//         border-top-right-radius: var(--border-radius);
//         border-bottom-right-radius: var(--border-radius);
//       }
//     }

//     td {
//       &.year {
//         padding-right: 20px;

//         @media (max-width: 768px) {
//           padding-right: 10px;
//           font-size: var(--fz-sm);
//         }
//       }

//       &.title {
//         padding-top: 15px;
//         padding-right: 20px;
//         color: var(--lightest-slate);
//         font-size: var(--fz-xl);
//         font-weight: 600;
//         line-height: 1.25;
//       }

//       &.company {
//         font-size: var(--fz-lg);
//         white-space: nowrap;
//       }

//       &.tech {
//         font-size: var(--fz-xxs);
//         font-family: var(--font-mono);
//         line-height: 1.5;
//         .separator {
//           margin: 0 5px;
//         }
//         span {
//           display: inline-block;
//         }
//       }

//       &.links {
//         min-width: 100px;

//         div {
//           display: flex;
//           align-items: center;

//           a {
//             ${({ theme }) => theme.mixins.flexCenter};
//             flex-shrink: 0;
//           }

//           a + a {
//             margin-left: 10px;
//           }
//         }
//       }
//     }
//   }
// `;

const ArchivePage = ({ location }) => {
  // const projects = data.allMarkdownRemark.edges;
  const revealTitle = useRef(null);
  const revealTable = useRef(null);
  const revealProjects = useRef([]);

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealTable.current, srConfig(200, 0));
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 10)));
  }, []);

  return (
    <Layout location={location}>
      <Helmet title="The Self Driving Trolley" />

      <main>
        <header ref={revealTitle}>
          <h1 className="big-heading">The Self Driving Trolley</h1>
          <p className="subtitle">Published Thursday, August 15, 2019 7:06 PM</p>
        </header>
        <body>
          <p>
            {' '}
            The “trolley problem” is an age-old philosophical conundrum that encapsulates the core
            of philosophical debate: is it more moral to do a bad thing or to let a worse thing
            happen?<br></br>
            Pippa Foot first proposed this thought experiment in 1967, and at the time it was just
            that: a thought experiment. Today, however, this situation is far from hypothetical. The
            traditional “trolley problem” begins like so: a person is driving a trolley on a track
            with five men working ahead, and one man working on the track to the right. The driver
            can either continue driving and let the five workers in the way die, or s/he can shift
            the train’s direction to the right and kill only one worker. Overall, this predicament
            is meant to showcase the core difference between utilitarian and deontological
            philosophies.<br></br>
            In this situation, a deontologist would argue that one ought to let the five people die
            rather than kill one person. Deontologists believe that the morality of an action can be
            determined by analyzing the intention, rather than the consequence, of the action in
            accordance with a set of rules. These “rules” were proposed by Immanuel Kant and are
            traditionally known as the Categorical Imperative. The second principle of such
            imperative can be applied to the “trolley problem” since the driver would be using the
            one person as a means to an end. In other words, even if the end state of the action is
            favorable, it cannot be justified if it requires compromising the autonomy -- or freedom
            -- of another.
            <br></br>On the other hand, a utilitarian would argue that the agent should always
            choose to kill one person die to save five. Utilitarianism is the philosophical belief
            that a moral action must maximize utility, or in other words, maximize pleasure. This
            theory only accounts for the consequences of actions, and therefore a utilitarian would
            disregard the distinction between positive and negative duties since these duties are
            only important when analyzing the intent of an agent. Only the end-result of the action
            -- one dead versus five dead -- would be morally relevant. Thus, a utilitarian would
            choose to turn the trolly right in order to maximize lives. Utilitarians believe this
            would be the morally correct course of action since the actor is maximizing life, and
            therefore happiness, for the greatest number of people. <br></br>Today, if you replace
            “trolley” with “self-driving car,” you have one of the largest moral dilemmas facing
            companies such as GM and Ford. In the future, it will be programmers, not drivers,
            making life-or-death decisions. For example, if the brakes fail, should the car continue
            driving and hit five pedestrians? Or should it swerve, thereby killing the passenger?
            <br></br>I believe that given the unreliability and novelty of self-driving cars, one
            must refrain from purely deontological or consequentialist logic and always air on the
            side of killing the passenger, or passengers. The technology for self-driving cars is
            relatively new, and therefore it will take years before self-driving cars gain the full
            trust of the public. Given the controversial nature of the “trolley problem” and of
            self-driving cars, it would be wrong to impose (relatively) arbitrary moral decisions on
            the general population. Pedestrians, for instance, never consented to having
            self-driving cars. Thus, it would be immoral to have them pay the fatal consequences of
            self-driving cars.
            <br></br>However, the people inside the self-driving cars did consent to the dangers of
            riding in a self-driving car, and therefore, it would be more acceptable to have them
            suffer the consequences. This view is largely in accordance with the belief that
            negative duties outweigh positive duties. Meaning, self-driving cars have a larger duty
            not to interfere with the lives of others (the pedestrians) than to provide aid. Given a
            utilitarian situation, even if it would be possible to swerve to save five passengers
            and kill one pedestrian, it would be immoral to do so given the negative duty not to
            harm the pedestrian.
            <br></br>Conversely, in a deontological situation, if the car had the option of steering
            to save five passengers or staying on track to kill one pedestrian, a deontologist would
            argue it is best to stay on track and kill one pedestrian. However, in the context of
            self-driving cars, it would be morally preferable to swerve the car and kill the five
            passengers to avoid killing the uninvolved pedestrian. In conclusion, the “trolley
            problem” is an interesting philosophical thought experiment with infinite implications
            on the self-driving car business. Despite the allure of traditional approaches, however,
            it is ultimately infeasible to approach this issue from a purely deontological or
            utilitarian perspective.
            <br></br>Until companies gain the trust and respect of the public, the self-driving car
            business ought to continue to have customers themselves bear the potential consequences.
          </p>
        </body>
      </main>
    </Layout>
  );
};
ArchivePage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default ArchivePage;

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            date
            title
            tech
            github
            external
            ios
            android
            company
          }
          html
        }
      }
    }
  }
`;
