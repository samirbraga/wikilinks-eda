# EDA - Wikilinks

Esse repositório é destinada à análise e processamento dos conjunto de dados [Wikilink](https://code.google.com/archive/p/wiki-links/). [Aqui](http://www.iesl.cs.umass.edu/data/data-wiki-links) encontram-se as instruções para download da versão com o contexto. Na pasta [scripts](./scripts) estão presentes scripts para conversão do formato original (binário codificado usando [Thrift](https://thrift.apache.org/)) para CSV e extração das menções.

Análise e pré-processamento estão presentes no diretório [analyzing](./analyzing). O notebook presente utiliza um arquivo no formato `.parquet`, para importação no PySpark. Este arquivo encontra-se [aqui](https://github.com/samirbraga/wikilinks-eda/tree/dataset).
