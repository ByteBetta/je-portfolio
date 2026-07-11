import { Download } from 'lucide-react'
import { resume } from '../data/resume'
import SectionHeader from './SectionHeader'
import './TestPlan.css'

const priorityClass = {
  Critical: 'tp-priority--critical',
  High: 'tp-priority--high',
  Medium: 'tp-priority--medium',
}

export default function TestPlan() {
  const plan = resume.testPlanSample

  return (
    <section id="test-plan" className="section test-plan">
      <div className="section-inner">
        <SectionHeader
          label="03 — Test Plan"
          title="Sample Test Plan"
          subtitle="How I structure coverage before a release goes live"
        />

        <article className="tp-doc card-surface">
          <header className="tp-doc__header">
            <div className="tp-doc__header-top">
              <h3 className="tp-doc__title">{plan.title}</h3>
              <a href="#" className="btn btn-ghost tp-doc__download">
                <Download size={16} aria-hidden="true" />
                Download test plan
              </a>
            </div>
            <dl className="tp-doc__meta">
              <div>
                <dt>Project</dt>
                <dd>{plan.meta.project}</dd>
              </div>
              <div>
                <dt>Build</dt>
                <dd>{plan.meta.build}</dd>
              </div>
              <div>
                <dt>Author</dt>
                <dd>{plan.meta.author}</dd>
              </div>
              <div>
                <dt>Tooling</dt>
                <dd>{plan.meta.tool}</dd>
              </div>
            </dl>
          </header>

          <div className="tp-doc__body">
            <section className="tp-block">
              <h4>Objective</h4>
              <p>{plan.objective}</p>
            </section>

            <div className="tp-split">
              <section className="tp-block tp-block--in">
                <h4>In Scope</h4>
                <ul>
                  {plan.scope.inScope.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
              <section className="tp-block tp-block--out">
                <h4>Out of Scope</h4>
                <ul>
                  {plan.scope.outOfScope.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>

            <section className="tp-block">
              <h4>Test Strategy</h4>
              <ol className="tp-strategy">
                {plan.strategy.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </section>

            <section className="tp-block">
              <h4>Test Environments</h4>
              <ul className="tp-tags">
                {plan.environments.map((env) => (
                  <li key={env}>{env}</li>
                ))}
              </ul>
            </section>

            <div className="tp-split">
              <section className="tp-block">
                <h4>Entry Criteria</h4>
                <ul>
                  {plan.entryCriteria.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
              <section className="tp-block tp-block--exit">
                <h4>Exit Criteria</h4>
                <ul>
                  {plan.exitCriteria.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>

            <section className="tp-block">
              <h4>Test Cases</h4>
              <div className="tp-table-wrap">
                <table className="tp-table">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Area</th>
                      <th scope="col">Summary</th>
                      <th scope="col">Priority</th>
                      <th scope="col">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {plan.testCases.map((tc) => (
                      <tr key={tc.id}>
                        <td>{tc.id}</td>
                        <td>{tc.area}</td>
                        <td>{tc.summary}</td>
                        <td>
                          <span className={`tp-priority ${priorityClass[tc.priority]}`}>
                            {tc.priority}
                          </span>
                        </td>
                        <td>{tc.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="tp-block">
              <h4>Risks & Mitigation</h4>
              <div className="tp-risks">
                {plan.risks.map((item) => (
                  <div key={item.risk} className="tp-risk card-surface">
                    <p className="tp-risk__label">Risk</p>
                    <p className="tp-risk__text">{item.risk}</p>
                    <p className="tp-risk__label">Mitigation</p>
                    <p className="tp-risk__text">{item.mitigation}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </article>

        <p className="test-plan__disclaimer">
          Sample test plan — structure based on real pre-launch QA workflows.
        </p>
      </div>
    </section>
  )
}
