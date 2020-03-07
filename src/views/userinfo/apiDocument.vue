<template>
  <div class="page_assetintro user-main">
    <div class="crumbs"><span>{{$t('apiManage.tip2')}}</span></div>
    <div class="api-main mod">
        <div class="cont" v-if="locale==='zh'">
          <div class="left-wrapper">
            <ul id="toc" class="toc-list-h1">
              <li>
                <a @click="changeHash('#menu01')"  class="toc-h1 toc-link active" data-title="简介">简介</a>
                <ul class="toc-list-h2 active" style="display: block;">
                  <li>
                    <a @click="changeHash('#menu01-a')"  class="toc-h2 toc-link" data-title="API 简介">API 简介</a>
                  </li>
                  <li>
                    <a @click="changeHash('#menu01-b')"  class="toc-h2 toc-link" data-title="API接口列表">API接口列表</a>
                  </li>
                </ul>
              </li>
              <li>
                <a @click="changeHash('#menu02')" class="toc-h1 toc-link active" data-title="接入说明">API接入说明</a>
                <ul class="toc-list-h2" style="display: block;">
                  <li>
                    <a @click="changeHash('#menu02-a')"  class="toc-h2 toc-link" data-title="接入 URLs">接入 URLs</a>
                  </li>
                  <li>
                    <a @click="changeHash('#menu02-b')"  class="toc-h2 toc-link" data-title="频道限制">限频规则</a>
                  </li>
                  <li>
                    <a @click="changeHash('#menu02-c')"  class="toc-h2 toc-link" data-title="签名认证">签名认证</a>
                  </li>
                  <li>
                    <a @click="changeHash('#menu02-d')"  class="toc-h2 toc-link" data-title="创建API KEY">创建API KEY</a>
                  </li>
                  <li>
                    <a @click="changeHash('#menu02-e')"  class="toc-h2 toc-link" data-title="请求格式">请求格式</a>
                  </li>
                  <li>
                    <a @click="changeHash('#menu02-f')"  class="toc-h2 toc-link" data-title="返回格式">返回格式</a>
                  </li>
                </ul>
              </li>
              <li>
                <a @click="changeHash('#menu03-a')"  class="toc-h1 toc-link active" data-title="具体API说明">具体API说明</a>
                <ul class="toc-list-h2" style="display: block;">
                  <li>
                    <a @click="changeHash('#menu03-a')"  class="toc-h2 toc-link" data-title="基础信息">基础信息</a>
                    <ul class="toc-list-h2" style="display: block;">
                      <li>
                        <a @click="changeHash('#menu03-a01')"  class="toc-h3 toc-link" data-title="获取当前系统时间">获取当前系统时间</a>
                      </li>
                      <li>
                        <a @click="changeHash('#menu03-a02')"  class="toc-h3 toc-link" data-title="获取所有交易对">获取交易对</a>
                      </li>
                      <li>
                        <a @click="changeHash('#menu03-a03')"  class="toc-h3 toc-link" data-title="获取所有币种">获取币种</a>
                      </li>

                    </ul>
                  </li>
                  <li>
                    <a @click="changeHash('#menu03-b')"  class="toc-h2 toc-link" data-title="行情数据">行情数据</a>
                    <ul class="toc-list-h2" style="display: block;">
                      <li>
                        <a @click="changeHash('#menu03-b01')"  class="toc-h3 toc-link" data-title="获取所有交易对ticker数据">获取所有交易对ticker数据</a>
                      </li>
                      <li>
                        <a @click="changeHash('#menu03-b02')"  class="toc-h3 toc-link" data-title="获取指定交易对ticker数据">获取指定交易对ticker数据</a>
                      </li>
                      <li>
                        <a @click="changeHash('#menu03-b03')"  class="toc-h3 toc-link" data-title="所有交易对的最新 Tickers">获取最新价</a>
                      </li>
                      <li>
                        <a @click="changeHash('#menu03-b04')"  class="toc-h3 toc-link" data-title="市场深度数据">获取交易对报价深度</a>
                      </li>
                      <li>
                        <a @click="changeHash('#menu03-b05')"  class="toc-h3 toc-link" data-title="最近市场成交记录">获取交易对K线数据</a>
                      </li>

                    </ul>
                  </li>
                  <li>
                    <a @click="changeHash('#menu03-c')"  class="toc-h2 toc-link" data-title="账户相关">账户相关</a>
                    <ul class="toc-list-h2" style="display: block;">

                      <li>
                        <a @click="changeHash('#menu03-c01')" class="toc-h3 toc-link" data-title="账户余额">获取账户余额</a>
                      </li>

                    </ul>
                  </li>
                  <li>
                    <a @click="changeHash('#menu03-d')"  class="toc-h2 toc-link" data-title="现货 / 杠杆交易">交易相关</a>
                    <ul class="toc-list-h2" style="display: block;">
                      <li>
                        <a @click="changeHash('#menu03-d01')"  class="toc-h3 toc-link" data-title="下单">委托查询</a>
                      </li>
                      <li>
                        <a @click="changeHash('#menu03-d02')"  class="toc-h3 toc-link" data-title="撤销订单">交易查询</a>
                      </li>
                      <li>
                        <a @click="changeHash('#menu03-d03')"  class="toc-h3 toc-link" data-title="查询当前未成交订单">委托下单</a>
                      </li>
                      <li>
                        <a @click="changeHash('#menu03-d04')"  class="toc-h3 toc-link" data-title="批量撤销订单（open orders）">委托撤单</a>
                      </li>
                      <li>
                        <a @click="changeHash('#menu03-d05')"  class="toc-h3 toc-link" data-title="批量撤销订单">批量撤单</a>
                      </li>

                    </ul>
                  </li>
                </ul>
              </li>

            </ul>

          </div>
          <div class="right-page">
            <div class="dark-box"></div>
            <div class="content">
              <h1 id="menu01">简介</h1>
              <h2 id="menu01-a">API 简介</h2>
              <p>目前udax api只支持REST访问方式, 你可以使用 API 获得市场行情数据，进行交易，并且管理你的账户。</p>
              <h2 id="menu01-b">API接口列表</h2>
              <p></p>
              <table width="60%">
                <thead>
                <tr>
                  <th>接口类型</th>
                  <th>接口</th>
                  <th>说明</th>
                  <th>验证签名</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>GET</td>
                  <td>/common/timestamp</td>
                  <td>获取系统时间戳</td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>GET</td>
                  <td>/common/symbolinfo</td>
                  <td>获取交易对信息</td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>GET</td>
                  <td>/common/digitalinfo</td>
                  <td>获取数字货币信息</td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>GET</td>
                  <td>/account/accountbalance</td>
                  <td>查询账户余额</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>GET</td>
                  <td>/order/orderquery</td>
                  <td>查询委托单</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>GET</td>
                  <td>/order/tradequery</td>
                  <td>查询成交单</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>GET</td>
                  <td>/quote/symbolticker</td>
                  <td>指定交易对ticker</td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>GET</td>
                  <td>/quote/tickers</td>
                  <td>所有交易对ticker</td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>GET</td>
                  <td>/quote/lastprice</td>
                  <td>交易对最新成交价</td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>GET</td>
                  <td>/quote/symboldeep</td>
                  <td>交易对报价深度</td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>GET</td>
                  <td>/quote/kline</td>
                  <td>k线历史</td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>POST</td>
                  <td>/order/orderrequest</td>
                  <td>下单</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>POST</td>
                  <td>/order/cancelorder</td>
                  <td>撤单</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>POST</td>
                  <td>/order/batchcancelorder</td>
                  <td>批量撤单</td>
                  <td>YES</td>
                </tr>
                </tbody>
              </table>

              <h1 id="menu02">API接入说明</h1>
              <h2 id="menu02-a">接入 URLs</h2>
              <p><strong>REST API</strong></p>

              <p><strong><code>http://192.168.1.51:5000 </code></strong></p>


              <h2 id="menu02-b">频率限制</h2>
              <p>现货：10秒100次</p>


              <h2 id="menu02-c">签名认证</h2>
              <p>API 请求在通过 internet 传输的过程中极有可能被篡改，为了确保请求未被更改，除公共接口（基础信息，行情数据）外的私有接口均必须使用您的 API Key 做签名认证，以校验参数或参数值在传输途中是否发生了更改。
              </p>

              <p>一个合法的请求由以下几部分组成：</p>

              <ul>
                <li>
                  <p>方法请求地址： http://192.168.1.51:5000</p>
                </li>
                <li>
                  <p>API 访问密钥 : AccessKey</p>
                </li>
                <li>
                  <p>签名方法（SignatureMethod）：用户计算签名的基于哈希的协议，此处使用 HmacSHA256</p>
                </li>
                <li>
                  <p>签名版本（SignatureVersion）：签名协议的版本，此处使用1</p>
                </li>
                <li>
                  <p>时间戳（Timestamp）：您发出请求的时间。如：2019-04-11T16:22:06</p>
                </li>
                <li>
                  <p>签名：签名计算得出的值</p>
                </li>

              </ul>
              <h2 id="menu02-d">创建 API Key</h2>
              <p>您可以在 <a class="set"><router-link to="apiManage">这里</router-link></a> 创建 API Key。</p>

              <p>API Key 包括以下两部分</p>

              <ul>
                <li>
                  <p><code>Access Key</code> API 访问密钥</p>
                </li>
                <li>
                  <p><code>Secret Key</code> 签名认证加密所使用的密钥（用户需妥善保管，秘钥丢失会导致资产风险）</p>
                </li>
              </ul>

              <aside class="notice">
                Api的有效期 :创建apikey系统会指定有效截止日，到期后需要再申请。
              </aside>

              <aside class="notice">
                APi绑定的ip：创建apikey时可选择绑定ip, 绑定后只有该ip能访问。
              </aside>


              <h2>签名步骤</h2>
              <h4>1. 规范要计算签名的请求 因为使用 HMAC 进行签名计算时,使用不同内容计算得到的结果会完全不同。所以在进行签名计算前，请先对请求进行规范化处理。下面以查询订单为例进行说明：</h4>


              <p><code>http://192.168.1.51:5000/order/orderquery?accessKey=123456&amp;direction=2&amp;order_status=1&amp;SignatureMethod=HmacSHA256&amp;SignatureVersion=1&amp;symbol=ETH/GOLDT&amp;Timestamp=2019-04-01T15:19:30&amp;Signature=N2YzNGM2NDA0ZGUwMGE3NjE4ODUyNDhiZmE1YzdkM2U2ZGQxNDk5NTE5ZDQ5OGJjNDA2NDA3ODZmMzRmMDJhNg==</code></p>
            
              <p>请求的参数，按照ASCII码的顺序对参数名进行排序, 链接后的完整字符串，和你的密钥 (Secret Key) 生成一个数字签名：</p>
              <h4>2. 先使用hmacsha256加密方式加密(例如:秘钥sercetkey=111111)，生成</h4>
              <p><code>7f34c6404de00a761885248bfa5c7d3e6dd1499519d498bc40640786f34f02a6</code></p>
              <h4>3. 再使用base64对其编码，得到签名字符串</h4>
              <p><code>
                N2YzNGM2NDA0ZGUwMGE3NjE4ODUyNDhiZmE1YzdkM2U2ZGQxNDk5NTE5ZDQ5OGJjNDA2NDA3ODZmMzRmMDJhNg==
              </code></p>
              <h4 >4. 将签名字符串赋值给参数Signature即可</h4>


              <h2 id="menu02-e">请求格式</h2>
              <p>所有的API请求都以GET或者POST形式发出。对于GET请求，所有的参数都在路径参数里；对于POST请求，所有参数则以JSON格式发送在请求主体（body）里。</p>
              <h2 id="menu02-f">返回格式</h2>
              <p>所有的接口返回都是JSON格式。在JSON最上层有几个表示请求状态和属性的字段："retCode", "retMsg", 实际的接口返回内容在"data"字段里.</p>



              <h3>错误码描述</h3>
              <table>
                <thead>
                <tr>
                  <th>错误码</th>
                  <th>英文描述</th>
                  <th>中文描述</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>0</td>
                  <td>OK</td>
                  <td>成功</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>missing parameter</td>
                  <td>缺少参数</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>sign check failed</td>
                  <td>签名校验失败</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>not support order type</td>
                  <td>不支持的下单类型</td>
                </tr>
                <tr>
                  <td>101</td>
                  <td>invalid symbol</td>
                  <td>交易对错误</td>
                </tr>
                <tr>
                  <td>102</td>
                  <td>invalid dc_code</td>
                  <td>货币代码错误</td>
                </tr>
                <tr>
                  <td>103</td>
                  <td>invalid period</td>
                  <td>时间段错误</td>
                </tr>
                <tr>
                  <td>104</td>
                  <td>invalid order_status</td>
                  <td>委托状态错误</td>
                </tr>
                <tr>
                  <td>105</td>
                  <td>invalid order direction</td>
                  <td>下单方向错误</td>
                </tr>
                <tr>
                  <td>106</td>
                  <td>invalid order_type</td>
                  <td>委托类型错误</td>
                </tr>
                <tr>
                  <td>107</td>
                  <td>invalid order price</td>
                  <td>委托价格错误</td>
                </tr>
                <tr>
                  <td>108</td>
                  <td>invalid order volume</td>
                  <td>委托数量错误</td>
                </tr>
                </tbody>
              </table>
              <blockquote>
                <p>返回内容将会是以下格式:</p>
              </blockquote>
              <pre class="highlight json tab-json"><code><span class="p">{</span><span class="w">
      </span><span class="s2">"retCode"</span><span class="p">:</span><span class="w"> </span><span class="s2">"0"</span><span class="p">,</span><span class="w">
      </span><span class="s2">"retMsg"</span><span class="p">:</span><span class="w"> </span><span class="s2">"ok"</span><span class="p">,</span><span class="w">
      </span><span class="s2">"ts"</span><span class="p">:</span><span class="w"> </span><span class="mi">1499223904680</span><span class="p">,</span><span class="w">
      </span><span class="s2">"data"</span><span class="p">:</span><span class="w"> </span><span class="err">//</span><span class="w"> </span><span class="err">per</span><span class="w"> </span><span class="err">API</span><span class="w"> </span><span class="err">response</span><span class="w"> </span><span class="err">data</span><span class="w"> </span><span class="err">in</span><span class="w"> </span><span class="err">nested</span><span class="w"> </span><span class="err">JSON</span><span class="w"> </span><span class="err">object</span><span class="w">
    </span><span class="p">}</span><span class="w">
    </span></code></pre>


              <h1 id="menu03-a">基础信息</h1>
              <h2 id="menu03-a01">获取当前系统时间</h2>
              <p>此接口返回当前的系统时间，时间是调整为北京时间的时间戳，单位毫秒。</p>
              <pre class="highlight shell tab-shell" style=""><code>curl <span class="s2">"https://api.huobi.pro/v1/common/timestamp"</span>
    </code></pre>
              <h3 id="http-3">HTTP 请求</h3>
              <ul>
                <li>GET <code>/common/currencys</code></li>
              </ul>
              <h3 id="1f9ac54b15-3">请求参数</h3>
              <p>此接口不接受任何参数。</p>


              <h3>返回字段</h3>
              <p>返回的“data”对象是一个整数表示返回的调整为北京时间的时间戳，单位毫秒。</p>
              <blockquote>
                <p>返回字段:</p>
              </blockquote>
              <pre class="highlight json tab-json"><code><span class="p">{</span><span class="w">
        </span><span class="s2">"data"</span><span class="p">:</span><span class="mi">1555381777685</span><span class="p">,</span><span class="w">
        </span><span class="w"> </span><span class="s2">"retCode"</span><span class="p">:</span><span class="w"> </span><span class="mi">0</span><span class="p">,</span>
        <span class="w"> </span><span class="s2">"retMsg"</span><span class="p">:</span><span class="w"> </span><span class="mi">"ok"</span><span class="p">,</span><span class="w">
      </span><span class="p">}</span>
    </code>
    </pre>

              <h2 id="menu03-a02">获取所有交易对</h2>

              <h3>HTTP 请求</h3>
              <ul>
                <li>GET <code>/common/symbolinfo</code></li>
              </ul>
              <h3>请求参数</h3>
              <p>symbol, 可选参数</p>
              <blockquote>
                <p>返回字段</p>
              </blockquote>
              <pre class="highlight json tab-json"><code><span class="w">  </span><span class="s2">"data"</span><span class="p">:</span><span class="w"> </span><span class="p">[</span><span class="w">
          </span><span class="p">{</span><span class="w">
            </span><span class="s2">"symbol"</span><span class="p">:</span><span class="w"> </span><span class="s2">"ETH/USDT"</span><span class="p">,</span><span class="w">
            </span><span class="s2">"trade_price_digit"</span><span class="p">:</span><span class="w"> </span><span class="s2">2</span><span class="p">,</span><span class="w">
            </span><span class="s2">"max_show_unit"</span><span class="p">:</span><span class="w"> </span><span class="mi">8</span><span class="p">,</span><span class="w">
            </span><span class="s2">"min_trade_digit"</span><span class="p">:</span><span class="w"> </span><span class="mi">4</span><span class="p">,</span><span class="w">
            </span><span class="s2">"min_trade_unit"</span><span class="p">:</span><span class="w"> </span><span class="s2">"0.001"</span><span class="p">,</span><span class="w">
            </span><span class="p">}</span><span class="w">
        </span><span class="p">]</span><span class="w">
        </span><span class="s2">"retCode"</span><span class="p">:</span><span class="w"> </span><span class="mi">0</span><span class="p">,</span><span class="w">
        </span><span class="s2">"retMsg"</span><span class="p">:</span><span class="w"> </span><span class="s2">"ok"</span><span class="p">,</span><span class="w">
        </span><span class="p">}</span><span class="w">
    </span></code></pre>


              <h2 id="menu03-a03">获取所有币种</h2>

              <h3>HTTP 请求</h3>
              <ul>
                <li>GET <code>/common/digitalinfo</code></li>
              </ul>
              <blockquote>
                <p>返回字段:</p>
              </blockquote>
              <pre class="highlight json tab-json"><code><span class="w">  </span><span class="s2">"data"</span><span class="p">:</span><span class="w"> </span><span class="p">[</span><span class="w">
          </span><span class="p">{</span><span class="w">
          </span><span class="s2">"limit_withdraw"</span><span class="p">: </span><span class="mi">0.0</span><span class="p">,</span><span class="w">
          </span><span class="s2">"charge_amount_method"</span><span class="p">: </span><span class="mi">2</span><span class="p">,</span><span class="w">
          </span><span class="s2">"can_withdraw"</span><span class="p">: </span><span class="mi">0</span><span class="p">,</span><span class="w">
          </span><span class="s2">"can_recharge"</span><span class="p">: </span><span class="mi">0</span><span class="p">,</span><span class="w">
          </span><span class="s2">"charge_amount"</span><span class="p">: </span><span class="mi">0.002</span><span class="p">,</span>
          <span class="s2">"dc_code"</span><span class="p">: </span><span class="s2">"BTC"</span><span class="p">,</span><span class="w">
              <span class="p">}</span>
        </span><span class="p">]</span><span class="w">
        </span><span class="s2">"retCode"</span><span class="p">:</span><span class="w"> </span><span class="mi">0</span><span class="p">,</span><span class="w">
        </span><span class="s2">"retMsg"</span><span class="p">:</span><span class="w"> </span><span class="s2">"ok"</span><span class="p">,</span><span class="w">
        </span><span class="p">}</span><span class="w">
        </span></code></pre>
              <h3>请求参数</h3>
              <p>accesskey, 必填参数（该参数用于判断用户所属白标）</p>
              <p>dc_code, 可选参数</p>

              <h1 id="menu03-b">行情数据</h1>

              <h2 id="menu03-b01">获取所有交易对ticker数据</h2>
              <blockquote>
                <p>返回字段:</p>
              </blockquote>
              <pre class="highlight json tab-json"><code><span class="p">{</span><span class="w">
      </span><span class="s2">"data"</span><span class="p">: </span><span class="p">[</span><span class="w">
          </span><span class="p">{</span><span class="w">
              </span><span class="s2">"HighestPrice"</span><span class="p">: </span><span class="mf">0.041</span><span class="p">,</span><span class="w">      </span><span class="w">
              </span><span class="s2">"bid"</span><span class="p">: </span><span class="mf">[0.041, 2.7]</span><span class="p">,</span><span class="w">
              </span><span class="s2">"ts"</span><span class="p">: </span><span class="mf">1555344004</span><span class="p">,</span><span class="w">
              </span><span class="s2">"openprice"</span><span class="p">: </span><span class="mf">0.041</span><span class="p">,</span><span class="w">
              </span><span class="s2">"PublishTime"</span><span class="p">: </span><span class="s2">"20190416 00:00:04"</span><span class="p">,</span><span class="w">
              </span><span class="s2">"volume"</span><span class="p">: </span><span class="mi">0.0</span><span class="p">,</span><span class="w">
              </span><span class="s2">"TotolVolume"</span><span class="p">: </span><span class="mf">0.0</span><span class="p">,</span><span class="w">
              </span><span class="s2">"ask"</span><span class="p">: </span><span class="mi">[0.0411, 1.16]</span><span class="w"><span class="p">,</span>
              </span><span class="s2">"LowestPrice"</span><span class="p">: </span><span class="mi">0.041</span>
              <span class="s2">"price"</span><span class="p">:</span><span class="mi">0.041</span><span class="p">,</span>
              <span class="s2">"symbol"</span><span class="p">:</span><span class="s2">"CCASH/USDT"</span><span class="p">,</span>
              <span class="w">
          </span><span class="p">},</span><span class="w">
          </span><span class="p">{</span><span class="w">
              </span><span class="s2">"HighestPrice"</span><span class="p">: </span><span class="mf">1000.0</span><span class="p">,</span><span class="w">
              </span><span class="s2">"symbol"</span><span class="p">: </span><span class="mf">"ETH/GOLDT"</span><span class="p">,</span><span class="w">
              </span><span class="s2">"ts"</span><span class="p">: </span><span class="mf">1555344004</span><span class="p">,</span><span class="w">
              </span><span class="s2">"openprice"</span><span class="p">: </span><span class="mf">1000.0</span><span class="p">,</span><span class="w">
              </span><span class="s2">"PublishTime"</span><span class="p">: </span><span class="s2">"20190416 00:00:04"</span><span class="p">,</span><span class="w">
              </span><span class="s2">"volume"</span><span class="p">: </span><span class="mi">0.0</span><span class="p">,</span><span class="w">
              </span><span class="s2">"TotolVolume"</span><span class="p">: </span><span class="mf">0.0</span><span class="p">,</span><span class="w">
              </span><span class="s2">"ask"</span><span class="p">: </span><span class="mi">[1000.0, 956575.83]</span><span class="p">,</span>
              <span class="s2">"ask"</span><span class="p">: </span><span class="mi">[1000.0, 956575.83]</span><span class="p">,</span>
              <span class="s2">"LowestPrice"</span><span class="p">: </span><span class="mi">1000.0</span><span class="p">,</span>
              <span class="s2">"price"</span><span class="p">: </span><span class="mi">1000.0</span><span class="p">,</span>
              <span class="p">}</span>
          <span class="p">]</span><span class="w">
          </span><span class="s2">"retCode"</span><span class="p">: </span><span class="w"> </span><span class="mi">0</span><span class="p">,</span><span class="w">
          </span><span class="s2">"retMsg"</span><span class="p">: </span><span class="w"> </span><span class="s2">"ok"</span><span class="p">,</span><span class="w">
    </span><span class="p">}</span><span class="w">
                </span></code></pre>
              <h3>HTTP 请求</h3>
              <ul>
                <li>GET <code>/common/symbolinfo</code></li>
              </ul>

              <h3>请求参数</h3>
              <p>Symbol, 可选参数</p>


              <h2 id="menu03-b02">获取指定交易对ticker数据</h2>
              <p></p>
              <h3>HTTP 请求</h3>
              <ul>
                <li>GET <code>/quote/symbolticker</code></li>
              </ul>

              <h3>请求参数</h3>
              <p>symbol</p>

              <blockquote>
                <p>返回字段:</p>
              </blockquote>
              <pre class="highlight json tab-json"><code><span class="p">{</span><span class="w">
      </span><span class="s2">"data"</span><span class="p">: </span><span class="w">
          </span><span class="p">{</span><span class="w">
              </span><span class="s2">"HighestPrice"</span><span class="p">: </span><span class="mf">1000.0</span><span class="p">,</span><span class="w">      </span><span class="w">
              </span><span class="s2">"symbol"</span><span class="p">: </span><span class="s2">"ETH/GOLDT"</span><span class="p">,</span><span class="w">
              </span><span class="s2">"ts"</span><span class="p">: </span><span class="mf">1555344004</span><span class="p">,</span><span class="w">
              </span><span class="s2">"openprice"</span><span class="p">: </span><span class="mf">1000.0</span><span class="p">,</span><span class="w">
              </span><span class="s2">"PublishTime"</span><span class="p">: </span><span class="s2">"20190416 00:00:04"</span><span class="p">,</span><span class="w">
              </span><span class="s2">"volume"</span><span class="p">: </span><span class="mi">0.0</span><span class="p">,</span><span class="w">
              </span><span class="s2">"TotolVolume"</span><span class="p">: </span><span class="mf">0.0</span><span class="p">,</span><span class="w">
              </span><span class="s2">"ask"</span><span class="p">: </span><span class="mi">[1000.0, 956575.83]</span><span class="w"><span class="p">,</span>
              </span><span class="s2">"LowestPrice"</span><span class="p">: </span><span class="mi">1000.0</span>
              <span class="s2">"price"</span><span class="p">:</span><span class="mi">1000.0</span><span class="p">,</span>
           <span class="p">}</span>
          <span class="s2">"retCode"</span><span class="p">: </span><span class="w"> </span><span class="mi">0</span><span class="p">,</span><span class="w">
          </span><span class="s2">"retMsg"</span><span class="p">: </span><span class="w"> </span><span class="s2">"ok"</span><span class="p">,</span><span class="w">
      </span><span class="p">}</span><span class="w">
                </span></code></pre>



              <h2 id="menu03-b03">获取最新价</h2>
              <p></p>
              <h3>HTTP 请求</h3>
              <ul>
                <li>GET <code> /quote/symbolinfo</code></li>
              </ul>

              <h3>请求参数</h3>
              <p>symbol, 可选参数</p>

              <blockquote>
                <p>返回字段:</p>
              </blockquote>
              <pre class="highlight json tab-json"><code><span class="p">{</span><span class="w">
      </span><span class="s2">"data"</span><span class="p">: </span><span class="p">[</span><span class="w">
          </span><span class="p">{</span><span class="w">
              </span><span class="s2">"symbol"</span><span class="p">: </span><span class="mf">"ETH/USDT"</span><span class="p">,</span><span class="w">      </span><span class="w">
              </span><span class="s2">"trade_price_digit"</span><span class="p">: </span><span class="mi">2</span><span class="p">,</span><span class="w">
              </span><span class="s2">"max_show_unit"</span><span class="p">: </span><span class="mf">8</span><span class="p">,</span><span class="w">
              </span><span class="s2">"min_trade_digit"</span><span class="p">: </span><span class="mf">4</span><span class="p">,</span><span class="w">
              </span><span class="s2">"min_trade_unit"</span><span class="p">: </span><span class="mi">0.001</span><span class="p">,</span>
          <span class="p">}</span><span class="w">
          </span><span class="p">]</span>
          <span class="s2">"retCode"</span><span class="p">: </span><span class="w"> </span><span class="mi">0</span><span class="p">,</span><span class="w">
          </span><span class="s2">"retMsg"</span><span class="p">: </span><span class="w"> </span><span class="s2">"ok"</span><span class="p">,</span><span class="w">
      </span><span class="p">}</span><span class="w">
                      </span></code></pre>


              <h2 id="menu03-b04">获取交易对报价深度</h2>
              <p></p>
              <h3>HTTP 请求</h3>
              <ul>
                <li>GET <code> /quote/symboldeep</code></li>
              </ul>

              <h3>请求参数</h3>
              <p>symbol, 可选参数</p>

              <blockquote>
                <p>返回字段:</p>
              </blockquote>
              <pre class="highlight json tab-json"><code><span class="p">{</span><span class="w">
      </span><span class="s2">"data"</span><span class="p">: </span><span class="p">[</span><span class="w">
           </span><span class="p">{</span><span class="w">
              </span><span class="s2">"symbol"</span><span class="p">: </span><span class="mf">"CCASH/USDT"</span><span class="p">,</span><span class="w">      </span><span class="w">
              </span><span class="s2">"tick"</span><span class="p">: </span><span class="p">{</span><span class="w">
                 </span><span class="s2">"max_show_unit"</span><span class="p">: </span>
                 <span class="w">    </span><span class="mi">[[0.041, 2.7], [0.0407, 1.77], [0.0406, 1.02], [0.0392, 1.57], [0.0386, 1.89],[0.0379, 0.99],<br><span class="w">      </span><span class="w">      </span>[0.0372, 1.51], [0.0367, 0.94], [0.0352, 0.9], [0.0345, 1.96]]</span><span class="p">,</span><span class="w">
                 </span><span class="s2">"asks"</span><span class="p">: </span>
                 <span class="w">    </span><span class="mf">[[0.0411, 1.16], [0.0546, 1.06], [0.0551, 1.56], [0.0554, 1.0], [0.0568, 0.32], [0.0571, 1.42],<br><span class="w">            </span>[0.0572, 0.01], [0.0575, 1.56], [0.0588, 0.71], [0.0599, 0.7]]</span><span class="p">,</span><span class="w">
                 </span><span class="p">}</span><span class="w">
              </span><span class="s2">"ts"</span><span class="p">: </span><span class="mf"> 1555344004</span><span class="p">,</span>
              <span class="p">}</span>
            <span class="s2">"retCode"</span><span class="p">: </span><span class="w"> </span><span class="mi">0</span><span class="p">,</span><span class="w">
            </span><span class="s2">"retMsg"</span><span class="p">: </span><span class="w"> </span><span class="s2">"ok"</span><span class="p">,</span><span class="w">
            </span><span class="p">}</span><span class="w">
            </span></code></pre>


              <h2 id="menu03-b05">获取交易对k线数据</h2>
              <p></p>
              <h3>HTTP 请求</h3>
              <ul>
                <li>GET <code>/quote/kline</code></li>
              </ul>

              <h3>请求参数</h3>
              <p>symbol, 可选参数</p>
              <p>period, 必填参数（取值1min, 15min, 30min, 1hour, 1day, 1week, 1month）</p>
              <p>size，可选参数（最大值50，超过后只返回50条）</p>


              <blockquote>
                <p>返回字段:</p>
              </blockquote>
              <pre class="highlight json tab-json"><code><span class="p">{</span><span class="w">
      </span><span class="s2">"data"</span><span class="p">: </span><span class="p">[</span><span class="w">
                 </span><span class="p">......</span>
              <span class="p">]</span>
            <span class="s2">"retCode"</span><span class="p">: </span><span class="w"> </span><span class="mi">0</span><span class="p">,</span><span class="w">
            </span><span class="s2">"retMsg"</span><span class="p">: </span><span class="w"> </span><span class="s2">"ok"</span><span class="p">,</span><span class="w">
      </span><span class="p">}</span><span class="w">
                </span></code></pre>

              <h1 id="menu03-c">账户相关</h1>
              <p></p>
              <h2 id="menu03-c01">获取账户余额</h2>
              <h3 >HTTP 请求</h3>
              <ul>
                <li>GET <code>/account/accountbalance</code></li>
              </ul>
              <h3>请求参数</h3>
              <p>dc_code, 可选参数</p>
              <p>签名需要的公共参数（略）</p>
              <p>accessKey, SignatureMethod, SignatureVersion, Signature</p>
              <blockquote>
                <p>返回字段:</p>
              </blockquote>
              <pre class="highlight json tab-json"><code><span class="p">{</span><span class="w">
      </span><span class="s2">"data"</span><span class="p">: </span><span class="p">[</span><span class="w">
              </span><span class="p"><span class="s2">"out_freeze"</span><span class="p">: </span><span class="mf">0.0</span><span class="p">,</span><span class="w">      </span>
              <span class="s2">"user_id"</span><span class="p">: </span><span class="mf">65</span><span class="p">,</span><span class="w">      </span>
              <span class="s2">"freeze_amount"</span><span class="p">: </span><span class="mf">0.0</span><span class="p">,</span><span class="w">      </span>
              <span class="s2">"available_amount"</span><span class="p">: </span><span class="mf">1001111.0</span><span class="p">,</span><span class="w">      </span>
              <span class="s2">"totol_amount"</span><span class="p">: </span><span class="mf">1001111.0</span><span class="p">,</span><span class="w">      </span>
              <span class="s2">"dc_code"</span><span class="p">: </span><span class="s2">"BTC"</span><span class="p">,</span><span class="w">      </span></span>
              <span class="p">]</span>
            <span class="s2">"retCode"</span><span class="p">: </span><span class="w"> </span><span class="mi">0</span><span class="p">,</span><span class="w">
            </span><span class="s2">"retMsg"</span><span class="p">: </span><span class="w"> </span><span class="s2">"ok"</span><span class="p">,</span><span class="w">
      </span><span class="p">}</span><span class="w">
            </span></code></pre>


              <h1 id="menu03-d">交易相关</h1>
              <p></p>
              <h2 id="menu03-d01">委托查询</h2>
              <blockquote>
                <p>返回字段:</p>
              </blockquote>
              <pre class="highlight json tab-json"><code><span class="p">{</span><span class="w">
      </span><span class="s2">"data"</span><span class="p">: </span><span class="p">[</span><span class="w">
              </span><span class="p"><span class="s2">委托单信息</span><span class="w">      </span></span>
              <span class="p">]</span>
            <span class="s2">"retCode"</span><span class="p">: </span><span class="w"> </span><span class="mi">0</span><span class="p">,</span><span class="w">
            </span><span class="s2">"retMsg"</span><span class="p">: </span><span class="w"> </span><span class="s2">"ok"</span><span class="p">,</span><span class="w">
      </span><span class="p">}</span><span class="w">
            </span></code></pre>
              <h3 >HTTP 请求</h3>
              <ul>
                <li>GET <code>/order/orderquery</code></li>
              </ul>
              <h3>请求参数</h3>
              <p>order_id  (委托单号)  可选</p>
              <p>symbol （交易对）    可选</p>
              <p>order_status(委托状态)  可选</p>
              <p>签名需要的公共参数</p>
              <p>accessKey, SignatureMethod, SignatureVersion, Signature</p>


              <h2 id="menu03-d02">交易查询</h2>
              <h3 >HTTP 请求</h3>

              <ul>
                <li>GET <code>/order/tradequery</code></li>
              </ul>
              <h3>请求参数</h3>
              <p>order_id  (委托单号)  可选</p>
              <p>direction（下单方向） 可选</p>
              <p>symbol （交易对）    可选</p>
              <p>order_status(委托状态)  可选</p>
              <p>签名需要的公共参数</p>
              <p>accessKey, SignatureMethod, SignatureVersion, Signature</p>
              <blockquote>
                <p>返回字段:</p>
              </blockquote>
              <pre class="highlight json tab-json"><code><span class="p">{</span><span class="w">
    </span><span class="s2">"data"</span><span class="p">: </span><span class="p">[</span><span class="w">
            </span><span class="p"><span class="s2">成交单信息</span><span class="w">      </span></span>
            <span class="p">]</span>
          <span class="s2">"retCode"</span><span class="p">: </span><span class="w"> </span><span class="mi">0</span><span class="p">,</span><span class="w">
           </span><span class="s2">"retMsg"</span><span class="p">: </span><span class="w"> </span><span class="s2">"ok"</span><span class="p">,</span><span class="w">
    </span><span class="p">}</span><span class="w">
          </span></code></pre>

              <h2 id="menu03-d03">委托下单</h2>
              <h3 >HTTP 请求</h3>

              <ul>
                <li>GET <code>/order/orderrequest</code></li>
              </ul>
              <h3>请求参数</h3>
              <p>order_type  (委托类型，1.限价下单; 2.市价下单(目前不支持);3. 撤单)  </p>
              <p>direction（下单方向, 1.买入; 2.卖出）</p>
              <p>symbol （交易对）</p>
              <p>price(委托价格)</p>
              <p>volume(委托数量)</p>
              <p>签名需要的公共参数</p>
              <p>accessKey, SignatureMethod, SignatureVersion, Signature</p>
              <blockquote>
                <p>返回字段:</p>
              </blockquote>
              <pre class="highlight json tab-json"><code><span class="p">{</span>
    <span class="s2">"retCode"</span><span class="p">: </span><span class="w"> </span><span class="mi">0</span><span class="p">,</span><span class="w">
    </span><span class="s2">"retMsg"</span><span class="p">: </span><span class="w"> </span><span class="s2">"ok"</span><span class="p">,</span><span class="w">
  </span><span class="p">}</span><span class="w">
      </span></code></pre>



              <h2 id="menu03-d04">委托撤单</h2>
              <h3 >HTTP 请求</h3>

              <ul>
                <li>GET <code>/order/cancelorder</code></li>
              </ul>
              <h3>请求参数</h3>
              <p>order_id  (原下单委托单号)  </p>
              <p>symbol （交易对）</p>

              <p>签名需要的公共参数</p>
              <p>accessKey, SignatureMethod, SignatureVersion, Signature</p>
              <blockquote>
                <p>返回字段:</p>
              </blockquote>
              <pre class="highlight json tab-json"><code><span class="p">{</span>
    <span class="s2">"retCode"</span><span class="p">: </span><span class="w"> </span><span class="mi">0</span><span class="p">,</span><span class="w">
    </span><span class="s2">"retMsg"</span><span class="p">: </span><span class="w"> </span><span class="s2">"ok"</span><span class="p">,</span><span class="w">
  </span><span class="p">}</span><span class="w">
      </span></code></pre>

              <h2 id="menu03-d05">批量撤单</h2>
              <h3 >HTTP 请求</h3>

              <ul>
                <li>GET <code>/order/batchcancelorder</code></li>
              </ul>
              <h3>请求参数</h3>
              <p>order_ids  (原下单委托单号,多个委托单号格式 {id1, id2,…} ,所有委托单必须是同一种交易对才行)</p>
              <p>symbol （交易对）</p>

              <p>签名需要的公共参数</p>
              <p>accessKey, SignatureMethod, SignatureVersion, Signature</p>
              <blockquote>
                <p>返回字段:</p>
              </blockquote>
              <pre class="highlight json tab-json"><code><span class="p">{</span>
    <span class="s2">"retCode"</span><span class="p">: </span><span class="w"> </span><span class="mi">0</span><span class="p">,</span><span class="w">
    </span><span class="s2">"retMsg"</span><span class="p">: </span><span class="w"> </span><span class="s2">"ok"</span><span class="p">,</span><span class="w">
  </span><span class="p">}</span><span class="w">
    </span></code></pre>
              <p></p>
              <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>


            </div>
          </div>
      </div>
      <div class="cont" v-else>
          <div class="left-wrapper">
            <ul id="toc" class="toc-list-h1">
              <li>
                <a  @click="changeHash('#menu01')"  class="toc-h1 toc-link active" data-title="Introduction">Introduction</a>
                <ul class="toc-list-h2 active" style="display: block;">
                  <li>
                    <a @click="changeHash('#menu01-a')" class="toc-h2 toc-link" data-title="API Introduction">API Introduction</a>
                  </li>
                  <li>
                    <a @click="changeHash('#menu01-b')" class="toc-h2 toc-link" data-title="API Listing">API Port Listing</a>
                  </li>
                </ul>
              </li>           
              <li>
                <a @click="changeHash('#menu02')" class="toc-h1 toc-link active" data-title="Access Instructions">API Access Instructions</a>
                <ul class="toc-list-h2" style="display: block;">
                  <li>
                    <a @click="changeHash('#menu02-a')" class="toc-h2 toc-link" data-title="Connecting URLs">Connecting URLs</a>
                  </li>
                  <li>
                    <a @click="changeHash('#menu02-b')" class="toc-h2 toc-link" data-title="Connecting Restrictions">Restrictions</a>
                  </li>
                  <li>
                    <a @click="changeHash('#menu02-c')" class="toc-h2 toc-link" data-title="Verify Signature">Verify Signature</a>
                  </li>
                  <li>
                    <a @click="changeHash('#menu02-d')" class="toc-h2 toc-link" data-title="Create API KEY">Create API KEY</a>
                  </li>
                  <li>
                    <a @click="changeHash('#menu02-e')" class="toc-h2 toc-link" data-title="Request Format">Request Format</a>
                  </li>
                  <li>
                    <a @click="changeHash('#menu02-f')" class="toc-h2 toc-link" data-title="Return Format">Return Format</a>
                  </li>
                </ul>
              </li>
              <li>
                <a @click="changeHash('#menu03-a')" class="toc-h1 toc-link active" data-title="API Instructions">API Instructions</a>
                <ul class="toc-list-h2" style="display: block;">
                  <li>
                    <a @click="changeHash('#menu03-a')" class="toc-h2 toc-link" data-title="Basic Information">Basic Information</a>
                    <ul class="toc-list-h2" style="display: block;">
                      <li>
                        <a @click="changeHash('#menu03-a01')" class="toc-h3 toc-link" data-title="Obtain current system time">Current System Time</a>
                      </li>
                      <li>
                        <a @click="changeHash('#menu03-a02')" class="toc-h3 toc-link" data-title="Obtain all trading pairs">All Trading Pairs</a>
                      </li>
                      <li>
                        <a @click="changeHash('#menu03-a03')" class="toc-h3 toc-link" data-title="Obtain all cryptocurrencies">All Cryptocurrencies</a>
                      </li>

                    </ul>
                  </li>
                  <li>
                    <a @click="changeHash('#menu03-b')" class="toc-h2 toc-link" data-title="Market Data">Market Data</a>
                    <ul class="toc-list-h2" style="display: block;">
                      <li>
                        <a @click="changeHash('#menu03-b01')"  class="toc-h3 toc-link" data-title="Obtain ticker data for all trading pairs">Ticker data for all trading pairs</a>
                      </li>
                      <li>
                        <a @click="changeHash('#menu03-b02')"  class="toc-h3 toc-link" data-title="Obtain ticker data for specific trading pair">Obtain ticker data for specific trading pair</a>
                      </li>
                      <li>
                        <a @click="changeHash('#menu03-b03')"  class="toc-h3 toc-link" data-title="Latest tickers for all trading pairs">Latest Prices</a>
                      </li>
                      <li>
                        <a @click="changeHash('#menu03-b04')"  class="toc-h3 toc-link" data-title="Market Depth Data">Market Depth Data for Trading Pair</a>
                      </li>
                      <li>
                        <a @click="changeHash('#menu03-b05')"  class="toc-h3 toc-link" data-title="Recenet Market Transaction Records">Trading Pair K-Line Data</a>
                      </li>

                    </ul>
                  </li>
                  <li>
                    <a @click="changeHash('#menu03-c')"  class="toc-h2 toc-link" data-title="Account Information">Account Information</a>
                    <ul class="toc-list-h2" style="display: block;">
                      <li>
                        <a @click="changeHash('#menu03-c01')" class="toc-h3 toc-link" data-title="Account Balance">Account Balance</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a @click="changeHash('#menu03-d')" class="toc-h2 toc-link" data-title="Spot/Leverage">Trading Information</a>
                    <ul class="toc-list-h2" style="display: block;">
                      <li>
                        <a @click="changeHash('#menu03-d01')"  class="toc-h3 toc-link" data-title="Buy/Sell">Buy/Sell Enquiry</a>
                      </li>
                      <li>
                        <a @click="changeHash('#menu03-d02')"  class="toc-h3 toc-link" data-title="Cancel Order">Trade Enquiry</a>
                      </li>
                      <li>
                        <a @click="changeHash('#menu03-d03')"  class="toc-h3 toc-link" data-title="Check Open Orders">Buy/Sell</a>
                      </li>
                      <li>
                        <a @click="changeHash('#menu03-d04')"  class="toc-h3 toc-link" data-title="Cancel Open Orders">Cancel Order</a>
                      </li>
                      <li>
                        <a @click="changeHash('#menu03-d05')"  class="toc-h3 toc-link" data-title="Cancel Orders">Cancel Orders in Batches</a>
                      </li>

                    </ul>
                  </li>
                </ul>
              </li>

            </ul>

          </div>
          <div class="right-page">
            <div class="dark-box"></div>
            <div class="content">
              <h1 id="menu01">Introduction</h1>
              <h2 id="menu01-a">API Introduction</h2>
              <p>Currently, UDAX api only supports REST access, you can obtain market data, trade and manage your account via the API.</p>
              <h2 id="menu01-b">API Access Listing</h2>
              <p></p>
              <table width="60%">
                <thead>
                <tr>
                  <th>Port Type</th>
                  <th>Port</th>
                  <th>Description</th>
                  <th>Verify Signature</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>GET</td>
                  <td>/common/timestamp</td>
                  <td>Obtain system timestamp</td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>GET</td>
                  <td>/common/symbolinfo</td>
                  <td>Obtain Trading Pair Information</td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>GET</td>
                  <td>/common/digitalinfo</td>
                  <td>Obtain Cryptocurrency Information</td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>GET</td>
                  <td>/account/accountbalance</td>
                  <td>Account Balance</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>GET</td>
                  <td>/order/orderquery</td>
                  <td>Open Orders</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>GET</td>
                  <td>/order/tradequery</td>
                  <td>Successful Orders</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>GET</td>
                  <td>/quote/symbolticker</td>
                  <td>Select Trading Pair Ticker</td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>GET</td>
                  <td>/quote/tickers</td>
                  <td>Tickers for all trading pairs</td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>GET</td>
                  <td>/quote/lastprice</td>
                  <td>Latest closing price for trading pair</td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>GET</td>
                  <td>/quote/symboldeep</td>
                  <td>Trading Pair Market Depth Data</td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>GET</td>
                  <td>/quote/kline</td>
                  <td>K Line History</td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>POST</td>
                  <td>/order/orderrequest</td>
                  <td>Trade</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>POST</td>
                  <td>/order/cancelorder</td>
                  <td>Cancel Order</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>POST</td>
                  <td>/order/batchcancelorder</td>
                  <td>Cancel Orders in Batches</td>
                  <td>YES</td>
                </tr>
                </tbody>
              </table>

              <h1 id="menu02">API Port Instructions</h1>
              <h2 id="menu02-a">Connecting URLs</h2>
              <p><strong>REST API</strong></p>

              <p><strong><code>http://192.168.1.51:5000 </code></strong></p>


              <h2 id="menu02-b">Connecting Restrictions</h2>
              <p>Spot：10sec/100x</p>


              <h2 id="menu02-c">Verification</h2>
              <p>API requests may be tampered with during transmission over the internet. Apart from public ports to obtain baisc information and market data, please use your API Key to verify your connection to private ports to ensure optimal security. This will also ensure that parameters have not been changed during transmissions.
              </p>

              <p>An authenticated and legal request comprise of the following:</p>

              <ul>
                <li>
                  <p>Request URL: http://192.168.1.51:5000</p>
                </li>
                <li>
                  <p>API Access Key: Access Key</p>
                </li>
                <li>
                  <p>Signature Method: User signature based on hash protocol - HmacSHA256</p>
                </li>
                <li>
                  <p>Signature Version: Signature Version 1</p>
                </li>
                <li>
                  <p>Timestamp: Your request time. E.g. 2019-04-11T16:22:06</p>
                </li>
                <li>
                  <p>Signature:Signature Value</p>
                </li>

              </ul>
              <h2 id="menu02-d">Create API Key</h2>
              <p>You can set router link <a class="set"><router-link to="apiManage">here</router-link></a> Create API Key。</p>

              <p>API Key comprise of the following two parts</p>

              <ul>
                <li>
                  <p><code>Access Key</code> API Access Key</p>
                </li>
                <li>
                  <p><code>Secret Key</code> Please store the acess key used by Signaure safely to avoid loss of assets.</p>
                </li>
              </ul>

              <aside class="notice">
                Api validity date: :The system will indicate validity of API key created. Please apply again after expiry.
              </aside>

              <aside class="notice">
                Bind IP to API: You can bind IP during creation of API and only this IP will have access.
              </aside>


              <h2>Signature Steps</h2>
              <h4>1. HMAC signature calculation is used. Calculation differs with content. Standardise your request before signature calculation. The following is an example using order enquiry:</h4>


              <p><code>http://192.168.1.51:5000/order/orderquery?accessKey=123456&amp;direction=2&amp;order_status=1&amp;SignatureMethod=HmacSHA256&amp;SignatureVersion=1&amp;symbol=ETH/GOLDT&amp;Timestamp=2019-04-01T15:19:30&amp;Signature=N2YzNGM2NDA0ZGUwMGE3NjE4ODUyNDhiZmE1YzdkM2U2ZGQxNDk5NTE5ZDQ5OGJjNDA2NDA3ODZmMzRmMDJhNg==</code></p>
            
              <p>Sort parameters according to ASCII-code order. The string and your Secret Key generates a digital signature:</p>
              <h4>2. Use hmacsha256 encryption (Example:sercetkey=111111)，generate</h4>
              <p><code>7f34c6404de00a761885248bfa5c7d3e6dd1499519d498bc40640786f34f02a6</code></p>
              <h4>3. Use base64 encoding to to get the signature string.</h4>
              <p><code>
                N2YzNGM2NDA0ZGUwMGE3NjE4ODUyNDhiZmE1YzdkM2U2ZGQxNDk5NTE5ZDQ5OGJjNDA2NDA3ODZmMzRmMDJhNg==
              </code></p>
              <h4 >4. Assign the signature string to the parameter Signature</h4>


              <h2 id="menu02-e">Request format</h2>
              <p>All API requests uses GET and POST methods. For GET, all parameters are in the path parameter. For POST, parameters are in JSON format (body).</p>
              <h2 id="menu02-f">Return format</h2>
              <p>Data returns in JSON format. At the top of the JSON are several fields that represent that request status and properties: : "retCode", "retMsg", the actual return content is in the "data" field.</p>



              <h3>Error code description Error code description</h3>
              <table>
                <thead>
                <tr>
                  <th>Error Code</th>
                  <th>English Description/th>
                  <th>Chinese Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>0</td>
                  <td>OK</td>
                  <td>Success</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Missing Parameter</td>
                  <td>Missing Parameter</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>sign check failed</td>
                  <td>Signature Verification Failed</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>not support order type</td>
                  <td>Unsupported Order Type</td>
                </tr>
                <tr>
                  <td>101</td>
                  <td>invalid symbol</td>
                  <td>Invalid Symbol</td>
                </tr>
                <tr>
                  <td>102</td>
                  <td>invalid dc_code</td>
                  <td>Ticker Error</td>
                </tr>
                <tr>
                  <td>103</td>
                  <td>invalid period</td>
                  <td>Invalid Period</td>
                </tr>
                <tr>
                  <td>104</td>
                  <td>invalid order_status</td>
                  <td>Invalid Order Status</td>
                </tr>
                <tr>
                  <td>105</td>
                  <td>invalid order direction</td>
                  <td>Invalid Order Direction</td>
                </tr>
                <tr>
                  <td>106</td>

                  <td>invalid order_type</td>
                  <td>Invalid Order Type</td>
                </tr>
                <tr>
                  <td>107</td>
                  <td>invalid order price</td>
                  <td>Invalid Order Price</td>
                </tr>
                <tr>
                  <td>108</td>
                  <td>invalid order volume</td>
                  <td>Invalid Ordr Volume</td>
                </tr>
                </tbody>
              </table>
              <blockquote>
                <p>Returned content format:</p>
              </blockquote>
              <pre class="highlight json tab-json"><code><span class="p">{</span><span class="w">
      </span><span class="s2">"retCode"</span><span class="p">:</span><span class="w"> </span><span class="s2">"0"</span><span class="p">,</span><span class="w">
      </span><span class="s2">"retMsg"</span><span class="p">:</span><span class="w"> </span><span class="s2">"ok"</span><span class="p">,</span><span class="w">
      </span><span class="s2">"ts"</span><span class="p">:</span><span class="w"> </span><span class="mi">1499223904680</span><span class="p">,</span><span class="w">
      </span><span class="s2">"data"</span><span class="p">:</span><span class="w"> </span><span class="err">//</span><span class="w"> </span><span class="err">per</span><span class="w"> </span><span class="err">API</span><span class="w"> </span><span class="err">response</span><span class="w"> </span><span class="err">data</span><span class="w"> </span><span class="err">in</span><span class="w"> </span><span class="err">nested</span><span class="w"> </span><span class="err">JSON</span><span class="w"> </span><span class="err">object</span><span class="w">
    </span><span class="p">}</span><span class="w">
    </span></code></pre>


              <h1 id="menu03-a">Basic Information</h1>
              <h2 id="menu03-a01">Obtain current system time</h2>
              <p>Port displays current system time. The timestamp is adjusted to Bejing time in milliseconds.</p>
              <pre class="highlight shell tab-shell" style=""><code>curl <span class="s2">"https://api.huobi.pro/v1/common/timestamp"</span>
    </code></pre>
              <h3 id="http-3">HTTP Request</h3>
              <ul>
                <li>GET <code>/common/currencys</code></li>
              </ul>
              <h3 id="1f9ac54b15-3">Request parameters</h3>
              <p>This port does not accept parameters.</p>


              <h3>Returned data</h3>
              <p>Returned data represents timestamp is adjusted to Bejing time in milliseconds.</p>
              <blockquote>
                <p>Returned data:</p>
              </blockquote>
              <pre class="highlight json tab-json"><code><span class="p">{</span><span class="w">
        </span><span class="s2">"data"</span><span class="p">:</span><span class="mi">1555381777685</span><span class="p">,</span><span class="w">
        </span><span class="w"> </span><span class="s2">"retCode"</span><span class="p">:</span><span class="w"> </span><span class="mi">0</span><span class="p">,</span>
        <span class="w"> </span><span class="s2">"retMsg"</span><span class="p">:</span><span class="w"> </span><span class="mi">"ok"</span><span class="p">,</span><span class="w">
      </span><span class="p">}</span>
    </code>
    </pre>

              <h2 id="menu03-a02">Obtain all trading pairs</h2>

              <h3>HTTP Request</h3>
              <ul>
                <li>GET <code>/common/symbolinfo</code></li>
              </ul>
              <h3>Request Parameters</h3>
              <p>symbol, select parameters</p>
              <blockquote>
                <p>Returned data:</p>
              </blockquote>
              <pre class="highlight json tab-json"><code><span class="w">  </span><span class="s2">"data"</span><span class="p">:</span><span class="w"> </span><span class="p">[</span><span class="w">
          </span><span class="p">{</span><span class="w">
            </span><span class="s2">"symbol"</span><span class="p">:</span><span class="w"> </span><span class="s2">"ETH/USDT"</span><span class="p">,</span><span class="w">
            </span><span class="s2">"trade_price_digit"</span><span class="p">:</span><span class="w"> </span><span class="s2">2</span><span class="p">,</span><span class="w">
            </span><span class="s2">"max_show_unit"</span><span class="p">:</span><span class="w"> </span><span class="mi">8</span><span class="p">,</span><span class="w">
            </span><span class="s2">"min_trade_digit"</span><span class="p">:</span><span class="w"> </span><span class="mi">4</span><span class="p">,</span><span class="w">
            </span><span class="s2">"min_trade_unit"</span><span class="p">:</span><span class="w"> </span><span class="s2">"0.001"</span><span class="p">,</span><span class="w">
            </span><span class="p">}</span><span class="w">
        </span><span class="p">]</span><span class="w">
        </span><span class="s2">"retCode"</span><span class="p">:</span><span class="w"> </span><span class="mi">0</span><span class="p">,</span><span class="w">
        </span><span class="s2">"retMsg"</span><span class="p">:</span><span class="w"> </span><span class="s2">"ok"</span><span class="p">,</span><span class="w">
        </span><span class="p">}</span><span class="w">
    </span></code></pre>


              <h2 id="menu03-a03">Obtain all cryptocurrencies</h2>

              <h3>HTTP Request</h3>
              <ul>
                <li>GET <code>/common/digitalinfo</code></li>
              </ul>
              <blockquote>
                <p>Returned data:</p>
              </blockquote>
              <pre class="highlight json tab-json"><code><span class="w">  </span><span class="s2">"data"</span><span class="p">:</span><span class="w"> </span><span class="p">[</span><span class="w">
          </span><span class="p">{</span><span class="w">
          </span><span class="s2">"limit_withdraw"</span><span class="p">: </span><span class="mi">0.0</span><span class="p">,</span><span class="w">
          </span><span class="s2">"charge_amount_method"</span><span class="p">: </span><span class="mi">2</span><span class="p">,</span><span class="w">
          </span><span class="s2">"can_withdraw"</span><span class="p">: </span><span class="mi">0</span><span class="p">,</span><span class="w">
          </span><span class="s2">"can_recharge"</span><span class="p">: </span><span class="mi">0</span><span class="p">,</span><span class="w">
          </span><span class="s2">"charge_amount"</span><span class="p">: </span><span class="mi">0.002</span><span class="p">,</span>
          <span class="s2">"dc_code"</span><span class="p">: </span><span class="s2">"BTC"</span><span class="p">,</span><span class="w">
              <span class="p">}</span>
        </span><span class="p">]</span><span class="w">
        </span><span class="s2">"retCode"</span><span class="p">:</span><span class="w"> </span><span class="mi">0</span><span class="p">,</span><span class="w">
        </span><span class="s2">"retMsg"</span><span class="p">:</span><span class="w"> </span><span class="s2">"ok"</span><span class="p">,</span><span class="w">
        </span><span class="p">}</span><span class="w">
        </span></code></pre>
              <h3>Request parameters</h3>
              <p>accesskey, required parameter. (Parameter determines which white label user belongs to)</p>
              <p>dc_code, Select parameter</p>

              <h1 id="menu03-b">Market Data</h1>

              <h2 id="menu03-b01">Obtain ticker data for all trading pairs</h2>
              <blockquote>
                <p>Returned data:</p>
              </blockquote>
              <pre class="highlight json tab-json"><code><span class="p">{</span><span class="w">
      </span><span class="s2">"data"</span><span class="p">: </span><span class="p">[</span><span class="w">
          </span><span class="p">{</span><span class="w">
              </span><span class="s2">"HighestPrice"</span><span class="p">: </span><span class="mf">0.041</span><span class="p">,</span><span class="w">      </span><span class="w">
              </span><span class="s2">"bid"</span><span class="p">: </span><span class="mf">[0.041, 2.7]</span><span class="p">,</span><span class="w">
              </span><span class="s2">"ts"</span><span class="p">: </span><span class="mf">1555344004</span><span class="p">,</span><span class="w">
              </span><span class="s2">"openprice"</span><span class="p">: </span><span class="mf">0.041</span><span class="p">,</span><span class="w">
              </span><span class="s2">"PublishTime"</span><span class="p">: </span><span class="s2">"20190416 00:00:04"</span><span class="p">,</span><span class="w">
              </span><span class="s2">"volume"</span><span class="p">: </span><span class="mi">0.0</span><span class="p">,</span><span class="w">
              </span><span class="s2">"TotolVolume"</span><span class="p">: </span><span class="mf">0.0</span><span class="p">,</span><span class="w">
              </span><span class="s2">"ask"</span><span class="p">: </span><span class="mi">[0.0411, 1.16]</span><span class="w"><span class="p">,</span>
              </span><span class="s2">"LowestPrice"</span><span class="p">: </span><span class="mi">0.041</span>
              <span class="s2">"price"</span><span class="p">:</span><span class="mi">0.041</span><span class="p">,</span>
              <span class="s2">"symbol"</span><span class="p">:</span><span class="s2">"CCASH/USDT"</span><span class="p">,</span>
              <span class="w">
          </span><span class="p">},</span><span class="w">
          </span><span class="p">{</span><span class="w">
              </span><span class="s2">"HighestPrice"</span><span class="p">: </span><span class="mf">1000.0</span><span class="p">,</span><span class="w">
              </span><span class="s2">"symbol"</span><span class="p">: </span><span class="mf">"ETH/GOLDT"</span><span class="p">,</span><span class="w">
              </span><span class="s2">"ts"</span><span class="p">: </span><span class="mf">1555344004</span><span class="p">,</span><span class="w">
              </span><span class="s2">"openprice"</span><span class="p">: </span><span class="mf">1000.0</span><span class="p">,</span><span class="w">
              </span><span class="s2">"PublishTime"</span><span class="p">: </span><span class="s2">"20190416 00:00:04"</span><span class="p">,</span><span class="w">
              </span><span class="s2">"volume"</span><span class="p">: </span><span class="mi">0.0</span><span class="p">,</span><span class="w">
              </span><span class="s2">"TotolVolume"</span><span class="p">: </span><span class="mf">0.0</span><span class="p">,</span><span class="w">
              </span><span class="s2">"ask"</span><span class="p">: </span><span class="mi">[1000.0, 956575.83]</span><span class="p">,</span>
              <span class="s2">"ask"</span><span class="p">: </span><span class="mi">[1000.0, 956575.83]</span><span class="p">,</span>
              <span class="s2">"LowestPrice"</span><span class="p">: </span><span class="mi">1000.0</span><span class="p">,</span>
              <span class="s2">"price"</span><span class="p">: </span><span class="mi">1000.0</span><span class="p">,</span>
              <span class="p">}</span>
          <span class="p">]</span><span class="w">
          </span><span class="s2">"retCode"</span><span class="p">: </span><span class="w"> </span><span class="mi">0</span><span class="p">,</span><span class="w">
          </span><span class="s2">"retMsg"</span><span class="p">: </span><span class="w"> </span><span class="s2">"ok"</span><span class="p">,</span><span class="w">
    </span><span class="p">}</span><span class="w">
                </span></code></pre>
              <h3>HTTP request</h3>
              <ul>
                <li>GET <code>/common/symbolinfo</code></li>
              </ul>

              <h3>Request parameter</h3>
              <p>Symbol, select parameter</p>


              <h2 id="menu03-b02">Obtain ticker data for selected trading pair</h2>
              <p></p>
              <h3>HTTP Request</h3>
              <ul>
                <li>GET <code>/quote/symbolticker</code></li>
              </ul>

              <h3>Request Parameter</h3>
              <p>symbol</p>

              <blockquote>
                <p>Returned data:</p>
              </blockquote>
              <pre class="highlight json tab-json"><code><span class="p">{</span><span class="w">
      </span><span class="s2">"data"</span><span class="p">: </span><span class="w">
          </span><span class="p">{</span><span class="w">
              </span><span class="s2">"HighestPrice"</span><span class="p">: </span><span class="mf">1000.0</span><span class="p">,</span><span class="w">      </span><span class="w">
              </span><span class="s2">"symbol"</span><span class="p">: </span><span class="s2">"ETH/GOLDT"</span><span class="p">,</span><span class="w">
              </span><span class="s2">"ts"</span><span class="p">: </span><span class="mf">1555344004</span><span class="p">,</span><span class="w">
              </span><span class="s2">"openprice"</span><span class="p">: </span><span class="mf">1000.0</span><span class="p">,</span><span class="w">
              </span><span class="s2">"PublishTime"</span><span class="p">: </span><span class="s2">"20190416 00:00:04"</span><span class="p">,</span><span class="w">
              </span><span class="s2">"volume"</span><span class="p">: </span><span class="mi">0.0</span><span class="p">,</span><span class="w">
              </span><span class="s2">"TotolVolume"</span><span class="p">: </span><span class="mf">0.0</span><span class="p">,</span><span class="w">
              </span><span class="s2">"ask"</span><span class="p">: </span><span class="mi">[1000.0, 956575.83]</span><span class="w"><span class="p">,</span>
              </span><span class="s2">"LowestPrice"</span><span class="p">: </span><span class="mi">1000.0</span>
              <span class="s2">"price"</span><span class="p">:</span><span class="mi">1000.0</span><span class="p">,</span>
           <span class="p">}</span>
          <span class="s2">"retCode"</span><span class="p">: </span><span class="w"> </span><span class="mi">0</span><span class="p">,</span><span class="w">
          </span><span class="s2">"retMsg"</span><span class="p">: </span><span class="w"> </span><span class="s2">"ok"</span><span class="p">,</span><span class="w">
      </span><span class="p">}</span><span class="w">
                </span></code></pre>



              <h2 id="menu03-b03">Obtain latest price</h2>
              <p></p>
              <h3>HTTP Request</h3>
              <ul>
                <li>GET <code> /quote/symbolinfo</code></li>
              </ul>

              <h3>Request parameter</h3>
              <p>symbol, select parameter</p>

              <blockquote>
                <p>Returned data:</p>
              </blockquote>
              <pre class="highlight json tab-json"><code><span class="p">{</span><span class="w">
      </span><span class="s2">"data"</span><span class="p">: </span><span class="p">[</span><span class="w">
          </span><span class="p">{</span><span class="w">
              </span><span class="s2">"symbol"</span><span class="p">: </span><span class="mf">"ETH/USDT"</span><span class="p">,</span><span class="w">      </span><span class="w">
              </span><span class="s2">"trade_price_digit"</span><span class="p">: </span><span class="mi">2</span><span class="p">,</span><span class="w">
              </span><span class="s2">"max_show_unit"</span><span class="p">: </span><span class="mf">8</span><span class="p">,</span><span class="w">
              </span><span class="s2">"min_trade_digit"</span><span class="p">: </span><span class="mf">4</span><span class="p">,</span><span class="w">
              </span><span class="s2">"min_trade_unit"</span><span class="p">: </span><span class="mi">0.001</span><span class="p">,</span>
          <span class="p">}</span><span class="w">
          </span><span class="p">]</span>
          <span class="s2">"retCode"</span><span class="p">: </span><span class="w"> </span><span class="mi">0</span><span class="p">,</span><span class="w">
          </span><span class="s2">"retMsg"</span><span class="p">: </span><span class="w"> </span><span class="s2">"ok"</span><span class="p">,</span><span class="w">
      </span><span class="p">}</span><span class="w">
                      </span></code></pre>


              <h2 id="menu03-b04">Obtain trading pair quotes</h2>
              <p></p>
              <h3>HTTP Request</h3>
              <ul>
                <li>GET <code> /quote/symboldeep</code></li>
              </ul>

              <h3>Request parameter</h3>
              <p>symbol, select parameter</p>

              <blockquote>
                <p>Returned data:</p>
              </blockquote>
              <pre class="highlight json tab-json"><code><span class="p">{</span><span class="w">
      </span><span class="s2">"data"</span><span class="p">: </span><span class="p">[</span><span class="w">
           </span><span class="p">{</span><span class="w">
              </span><span class="s2">"symbol"</span><span class="p">: </span><span class="mf">"CCASH/USDT"</span><span class="p">,</span><span class="w">      </span><span class="w">
              </span><span class="s2">"tick"</span><span class="p">: </span><span class="p">{</span><span class="w">
                 </span><span class="s2">"max_show_unit"</span><span class="p">: </span>
                 <span class="w">    </span><span class="mi">[[0.041, 2.7], [0.0407, 1.77], [0.0406, 1.02], [0.0392, 1.57], [0.0386, 1.89],[0.0379, 0.99],<br><span class="w">      </span><span class="w">      </span>[0.0372, 1.51], [0.0367, 0.94], [0.0352, 0.9], [0.0345, 1.96]]</span><span class="p">,</span><span class="w">
                 </span><span class="s2">"asks"</span><span class="p">: </span>
                 <span class="w">    </span><span class="mf">[[0.0411, 1.16], [0.0546, 1.06], [0.0551, 1.56], [0.0554, 1.0], [0.0568, 0.32], [0.0571, 1.42],<br><span class="w">            </span>[0.0572, 0.01], [0.0575, 1.56], [0.0588, 0.71], [0.0599, 0.7]]</span><span class="p">,</span><span class="w">
                 </span><span class="p">}</span><span class="w">
              </span><span class="s2">"ts"</span><span class="p">: </span><span class="mf"> 1555344004</span><span class="p">,</span>
              <span class="p">}</span>
            <span class="s2">"retCode"</span><span class="p">: </span><span class="w"> </span><span class="mi">0</span><span class="p">,</span><span class="w">
            </span><span class="s2">"retMsg"</span><span class="p">: </span><span class="w"> </span><span class="s2">"ok"</span><span class="p">,</span><span class="w">
            </span><span class="p">}</span><span class="w">
            </span></code></pre>


              <h2 id="menu03-b05">Obtain K line data for trading pairs</h2>
              <p></p>
              <h3>HTTP Request</h3>
              <ul>
                <li>GET <code>/quote/kline</code></li>
              </ul>

              <h3>Request parameter</h3>
              <p>symbol, select parameter</p>
              <p>period, required parameter (1min, 15min, 30min, 1hour, 1day, 1week, 1month）</p>
              <p>size，select parameter（max 50）</p>


              <blockquote>
                <p>Returned data:</p>
              </blockquote>
              <pre class="highlight json tab-json"><code><span class="p">{</span><span class="w">
      </span><span class="s2">"data"</span><span class="p">: </span><span class="p">[</span><span class="w">
                 </span><span class="p">......</span>
              <span class="p">]</span>
            <span class="s2">"retCode"</span><span class="p">: </span><span class="w"> </span><span class="mi">0</span><span class="p">,</span><span class="w">
            </span><span class="s2">"retMsg"</span><span class="p">: </span><span class="w"> </span><span class="s2">"ok"</span><span class="p">,</span><span class="w">
      </span><span class="p">}</span><span class="w">
                </span></code></pre>

              <h1 id="menu03-c">Account Information</h1>
              <p></p>
              <h2 id="menu03-c01">Account Balance</h2>
              <h3 >HTTP Request</h3>
              <ul>
                <li>GET <code>/account/accountbalance</code></li>
              </ul>
              <h3>Request parameter</h3>
              <p>dc_code, select parameter</p>
              <p>Common parameters required for signature (brief)</p>
              <p>accessKey, SignatureMethod, SignatureVersion, Signature</p>
              <blockquote>
                <p>Returned data:</p>
              </blockquote>
              <pre class="highlight json tab-json"><code><span class="p">{</span><span class="w">
      </span><span class="s2">"data"</span><span class="p">: </span><span class="p">[</span><span class="w">
              </span><span class="p"><span class="s2">"out_freeze"</span><span class="p">: </span><span class="mf">0.0</span><span class="p">,</span><span class="w">      </span>
              <span class="s2">"user_id"</span><span class="p">: </span><span class="mf">65</span><span class="p">,</span><span class="w">      </span>
              <span class="s2">"freeze_amount"</span><span class="p">: </span><span class="mf">0.0</span><span class="p">,</span><span class="w">      </span>
              <span class="s2">"available_amount"</span><span class="p">: </span><span class="mf">1001111.0</span><span class="p">,</span><span class="w">      </span>
              <span class="s2">"totol_amount"</span><span class="p">: </span><span class="mf">1001111.0</span><span class="p">,</span><span class="w">      </span>
              <span class="s2">"dc_code"</span><span class="p">: </span><span class="s2">"BTC"</span><span class="p">,</span><span class="w">      </span></span>
              <span class="p">]</span>
            <span class="s2">"retCode"</span><span class="p">: </span><span class="w"> </span><span class="mi">0</span><span class="p">,</span><span class="w">
            </span><span class="s2">"retMsg"</span><span class="p">: </span><span class="w"> </span><span class="s2">"ok"</span><span class="p">,</span><span class="w">
      </span><span class="p">}</span><span class="w">
            </span></code></pre>


              <h1 id="menu03-d">Trading Information</h1>
              <p></p>
              <h2 id="menu03-d01">Open trades</h2>
              <blockquote>
                <p>Returned data:</p>
              </blockquote>
              <pre class="highlight json tab-json"><code><span class="p">{</span><span class="w">
      </span><span class="s2">"data"</span><span class="p">: </span><span class="p">[</span><span class="w">
              </span><span class="p"><span class="s2">Open trade information</span><span class="w">      </span></span>
              <span class="p">]</span>
            <span class="s2">"retCode"</span><span class="p">: </span><span class="w"> </span><span class="mi">0</span><span class="p">,</span><span class="w">
            </span><span class="s2">"retMsg"</span><span class="p">: </span><span class="w"> </span><span class="s2">"ok"</span><span class="p">,</span><span class="w">
      </span><span class="p">}</span><span class="w">
            </span></code></pre>
              <h3 >HTTP request</h3>
              <ul>
                <li>GET <code>/order/orderquery</code></li>
              </ul>
              <h3>Request parameter</h3>
              <p>order_id  (Order No.)  Select</p>
              <p>symbol （Trading Pair）    Select</p>
              <p>order_status(Order Status)  Select</p>
              <p>Common parameters required for signature</p>
              <p>accessKey, SignatureMethod, SignatureVersion, Signature</p>


              <h2 id="menu03-d02">Trading Information</h2>
              <h3 >HTTP request</h3>

              <ul>
                <li>GET <code>/order/tradequery</code></li>
              </ul>
              <h3>Request parameter</h3>
              <p>order_id  (Order No.)  Select</p>
              <p>direction（Direction） Select</p>
              <p>symbol （Trading Pair）    Select</p>
              <p>order_status(Order Status)  Select</p>
              <p>Common parameters required for signature</p>
              <p>accessKey, SignatureMethod, SignatureVersion, Signature</p>
              <blockquote>
                <p>Returned data:</p>
              </blockquote>
              <pre class="highlight json tab-json"><code><span class="p">{</span><span class="w">
    </span><span class="s2">"data"</span><span class="p">: </span><span class="p">[</span><span class="w">
            </span><span class="p"><span class="s2">Successful Trades Information</span><span class="w">      </span></span>
            <span class="p">]</span>
          <span class="s2">"retCode"</span><span class="p">: </span><span class="w"> </span><span class="mi">0</span><span class="p">,</span><span class="w">
           </span><span class="s2">"retMsg"</span><span class="p">: </span><span class="w"> </span><span class="s2">"ok"</span><span class="p">,</span><span class="w">
    </span><span class="p">}</span><span class="w">
          </span></code></pre>

              <h2 id="menu03-d03">Orders</h2>
              <h3 >HTTP request</h3>

              <ul>
                <li>GET <code>/order/orderrequest</code></li>
              </ul>
              <h3>Request parameter</h3>
              <p>order_type  (Order Type, 1. Limit Orders; 2.Market Price Orders (Currently Unsupported; 3. Cancelled Orders)  </p>
              <p>direction（Direction, 1.Buy; 2.Sell）</p>
              <p>symbol （Trading Pair）</p>
              <p>price(Price)</p>
              <p>volume(Volume)</p>
              <p>Common parameters required for signature</p>
              <p>accessKey, SignatureMethod, SignatureVersion, Signature</p>
              <blockquote>
                <p>Returned data:</p>
              </blockquote>
              <pre class="highlight json tab-json"><code><span class="p">{</span>
    <span class="s2">"retCode"</span><span class="p">: </span><span class="w"> </span><span class="mi">0</span><span class="p">,</span><span class="w">
    </span><span class="s2">"retMsg"</span><span class="p">: </span><span class="w"> </span><span class="s2">"ok"</span><span class="p">,</span><span class="w">
  </span><span class="p">}</span><span class="w">
      </span></code></pre>



              <h2 id="menu03-d04">Cancel Orders</h2>
              <h3 >HTTP request</h3>

              <ul>
                <li>GET <code>/order/cancelorder</code></li>
              </ul>
              <h3>Request Parameter</h3>
              <p>order_id  (Order No.)  </p>
              <p>symbol （Trading Pair）</p>

              <p>Common parameters required for signature</p>
              <p>accessKey, SignatureMethod, SignatureVersion, Signature</p>
              <blockquote>
                <p>Returned data:</p>
              </blockquote>
              <pre class="highlight json tab-json"><code><span class="p">{</span>
    <span class="s2">"retCode"</span><span class="p">: </span><span class="w"> </span><span class="mi">0</span><span class="p">,</span><span class="w">
    </span><span class="s2">"retMsg"</span><span class="p">: </span><span class="w"> </span><span class="s2">"ok"</span><span class="p">,</span><span class="w">
  </span><span class="p">}</span><span class="w">
      </span></code></pre>

              <h2 id="menu03-d05">Batch Cancellation</h2>
              <h3 >HTTP request</h3>

              <ul>
                <li>GET <code>/order/batchcancelorder</code></li>
              </ul>
              <h3>Request parameter</h3>
              <p>order_ids  (Order No., format for multiple orders {id1, id2,…}, all orders has to be from the same trading pair)</p>
              <p>symbol （Trading pair）</p>

              <p>Common parameters required for signature</p>
              <p>accessKey, SignatureMethod, SignatureVersion, Signature</p>
              <blockquote>
                <p>Returned data:</p>
              </blockquote>
              <pre class="highlight json tab-json"><code><span class="p">{</span>
    <span class="s2">"retCode"</span><span class="p">: </span><span class="w"> </span><span class="mi">0</span><span class="p">,</span><span class="w">
    </span><span class="s2">"retMsg"</span><span class="p">: </span><span class="w"> </span><span class="s2">"ok"</span><span class="p">,</span><span class="w">
  </span><span class="p">}</span><span class="w">
    </span></code></pre>
              <p></p>
              <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>


            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "apiDocument",
    data(){
      var type = navigator.appName;
      var lang;
      if (type == "Netscape"){
        lang = navigator.language;//获取浏览器配置语言，支持非IE浏览器
      }else{
        lang = navigator.browserLanguage;//获取浏览器配置语言，支持IE5+ == navigator.systemLanguage
      };
      lang = lang.substr(0, 2);//获取浏览器配置语言前两位
      return{
        locale:this.$cookies.get("language")||lang
      }
    },
    methods:{
      //使用document.querySelector实现锚点的效果
      changeHash(idName) {
          document.querySelector(idName).scrollIntoView(true);
      }
    }
  }
</script>
<style>
  /*! normalize.css v3.0.2 | MIT License | git.io/normalize */
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%
  }



  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section,
  summary {
    display: block
  }

  audio,
  canvas,
  progress,
  video {
    display: inline-block;
    vertical-align: baseline
  }

  audio:not([controls]) {
    display: none;
    height: 0
  }

  [hidden],
  template {
    display: none
  }

  a {
    background-color: transparent
  }

  a:active,
  a:hover {
    outline: 0
  }

  abbr[title] {
    border-bottom: 1px dotted
  }

  b,
  strong {
    font-weight: bold
  }

  dfn {
    font-style: italic
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0
  }

  mark {
    background: #ff0;
    color: #000
  }

  small {
    font-size: 80%
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline
  }

  sup {
    top: -0.5em
  }

  sub {
    bottom: -0.25em
  }

  img {
    border: 0
  }

  svg:not(:root) {
    overflow: hidden
  }

  figure {
    margin: 1em 40px
  }

  hr {
    box-sizing: content-box;
    height: 0
  }

  pre {
    overflow: auto
  }

  code,
  kbd,
  pre,
  samp {
    font-family: monospace, monospace;
    font-size: 1em
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    color: inherit;
    font: inherit;
    margin: 0
  }

  button {
    overflow: visible
  }

  button,
  select {
    text-transform: none
  }

  button,
  html input[type="button"],
  input[type="reset"],
  input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer
  }

  button[disabled],
  html input[disabled] {
    cursor: default
  }

  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0
  }

  input {
    line-height: normal
  }

  input[type="checkbox"],
  input[type="radio"] {
    box-sizing: border-box;
    padding: 0
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    height: auto
  }

  input[type="search"] {
    -webkit-appearance: textfield;
    box-sizing: content-box
  }

  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none
  }

  fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em
  }

  legend {
    border: 0;
    padding: 0
  }

  textarea {
    overflow: auto
  }

  optgroup {
    font-weight: bold
  }

  table {
    border-collapse: collapse;
    border-spacing: 0
  }

  td,
  th {
    padding: 0
  }

  .content h1,
  .content h2,
  .content h3,
  .content h4,
  .content h5,
  .content h6,
  html,
  body {
    font-family: "Open Sans", "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", monospace, serif;
    font-size: 14px
  }

  .content h1,
  .content h2,
  .content h3,
  .content h4,
  .content h5,
  .content h6 {
    font-weight: bold
  }

  .content code,
  .content pre {
    font-family: Consolas, Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, serif;
    font-size: 14px;
    line-height: 1.5
  }

  .content code {
    word-break: break-all;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto
  }


  html,
  body {

    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    height: 100%;
    -webkit-text-size-adjust: none
  }

  #toc>ul>li>a>span {
    float: right;
    background-color: #2484FF;
    border-radius: 40px;
    width: 20px
  }

  .api-main.mod .cont{
    position:relative;
    display:flex;
    justify-content: flex-start;
    align-items:stretch;
  }
  .crumbs{
    margin-bottom: 0;
  }

  .left-wrapper {
    transition: left 0.3s ease-in-out;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 30;

    width: 260px;
    min-width:260px;
    font-size: 14px;
    font-weight: bold;
    border-right:1px solid #374172

  }

  .left-wrapper .lang-selector {
    display: none
  }

  .left-wrapper .lang-selector a {
    padding-top: 0.5em;
    padding-bottom: 0.5em
  }

  .left-wrapper>.search {
    position: relative
  }

  .left-wrapper>.search input {

    border: 1px solid;
    border-color: #303759;
    padding: 6px 0 6px 30px;
    box-sizing: border-box;
    margin: 10px 15px;
    width: 200px;
    outline: none;
    color: #D2D6EC;
    font-weight: normal;
    border-radius: 0;
    transition: all 300ms;
    margin-top: 35px
  }

  .left-wrapper>.search input::-webkit-input-placeholder {
    color: #61688A
  }

  .left-wrapper>.search input::-moz-placeholder {
    color: #61688A
  }

  .left-wrapper>.search input:-ms-input-placeholder {
    color: #61688A
  }

  .left-wrapper>.search input::placeholder {
    color: #61688A
  }

  .left-wrapper>.search input:active,
  .left-wrapper>.search input:focus {
    border-color: #696cee
  }

  .left-wrapper>.search:before {
    position: absolute;
    top: 44px;
    left: 23px;
    color: #61688A
  }

  .left-wrapper .search-results {
    margin-top: 0;
    box-sizing: border-box;
    height: 0;
    overflow-y: auto;
    overflow-x: hidden;
    transition-property: height, margin;
    transition-duration: 180ms;
    transition-timing-function: ease-in-out;
    background: #131625
  }

  .left-wrapper .search-results.visible {
    height: 30%
  }

  .left-wrapper .search-results li {
    margin: 0 15px;
    line-height: 28px;
    font-size: 14px;
    font-weight: normal
  }

  .left-wrapper .search-results a {
    color: #D2D6EC;
    text-decoration: none;
    transition: all 300ms
  }

  .left-wrapper .search-results a:hover {
    color: #696cee
  }

  .left-wrapper ul,
  .left-wrapper li {
    list-style: none;
    margin: 0;
    padding: 0;
    line-height: 36px
  }

  .left-wrapper li {
    color: #D2D6EC;
    transition-property: background;
    transition-timing-function: linear;
    transition-duration: 200ms
  }

  .left-wrapper .toc-link.active {
    background:rgba(0, 0, 0, 0.2);
    color: #696cee;
    /* border-left: 1px solid #696cee */
  }

  .left-wrapper .toc-link.active-parent {

    color: #696cee
  }

  .left-wrapper .toc-list-h2 {
    display: none;

    font-weight: 500
  }

  .left-wrapper .toc-h2 {
    padding-left: 25px;
    font-size: 13px
  }
  .left-wrapper .toc-h3 {
    padding-left: 35px;
    font-size: 13px
  }
  .left-wrapper .toc-footer {
    padding: 1em 0;
    margin-top: 1em;
    border-top: 1px dashed #303759
  }

  .left-wrapper .toc-footer li,
  .left-wrapper .toc-footer a {
    color: #D2D6EC;
    text-decoration: none
  }

  .left-wrapper .toc-footer a:hover {
    text-decoration: underline
  }

  .left-wrapper .toc-footer li {
    font-size: 0.8em;
    line-height: 1.7;
    text-decoration: none
  }

  .toc-link,
  .toc-footer li {
    padding: 0 15px 0 15px;
    display: block;
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-decoration: none;
    color: #D2D6EC;
    transition-property: background;
    transition-timing-function: linear;
    transition-duration: 130ms
  }

  #nav-button {
    padding: 0 1.5em 5em 0;
    display: none;
    position: fixed;
    top: 60;
    left: 0;
    z-index: 100;
    color: #000;
    text-decoration: none;
    font-weight: bold;
    opacity: 0.7;
    line-height: 16px;
    transition: left 0.3s ease-in-out
  }

  #nav-button span {
    display: block;
    padding: 6px 6px 6px;
    background-color: rgba(255, 255, 255, 0.7);
    transform-origin: 0 0;
    transform: rotate(-90deg) translate(-100%, 0);
    border-radius: 0 0 0 5px
  }

  #nav-button img {
    height: 16px;
    vertical-align: bottom
  }

  #nav-button:hover {
    opacity: 1
  }

  #nav-button.open {
    left: 230px
  }

  .right-page {
    position: relative;
    z-index: 10;
    width:100%;
    height:1100px;
    min-height: 900px;
    padding-bottom: 1px;
    overflow-y: scroll
  }

  /* .right-page .dark-box {
    width: 40%;
    background-color: #2D3040;
    position: absolute;
    right: 0;
    top: 60px;
    bottom: 0
  }

  .right-page .lang-selector {
    position: fixed;
    z-index: 50;
    border-bottom: 5px solid #2D3040
  }

  .lang-selector {
    background-color: #131625;
    width: 100%;
    font-weight: bold
  }

  .lang-selector a {
    display: block;
    float: left;
    color: #D2D6EC;
    text-decoration: none;
    padding: 0 10px;
    line-height: 30px;
    outline: 0
  }

  .lang-selector a:active,
  .lang-selector a:focus {
    background-color: #2D3040;
    color: #D2D6EC
  }

  .lang-selector a.active {
    background-color: #2D3040;
    color: #D2D6EC
  }

  .lang-selector:after {
    content: '';
    clear: both;
    display: block
  } */

  .content {
    -webkit-transform: translateZ(0);
    position: relative;
    z-index: 30
  }

  .content a {
    color: #696cee;
    text-decoration: none
  }

  .content:after {
    content: '';
    display: block;
    clear: both
  }

  .content>h1,
  .content>h2,
  .content>h3,
  .content>h4,
  .content>h5,
  .content>h6,
  .content>p,
  .content>table,
  .content>ul,
  .content>ol,
  .content>aside,
  .content>dl {
    /* margin-right: 40%; */
    padding: 0 28px;
    box-sizing: border-box;
    display: block
  }

  .content>ul,
  .content>ol {
    padding-left: 43px;
    line-height: 2;
  }

  .content>h1,
  .content>h2,
  .content>div {
    clear: both
  }

  .content>h1[id],
  .content>h2[id],
  .content>h3[id],
  .content>h4[id],
  .content>h5[id],
  .content>h6[id] {
    /* margin-top: -40px; */
  }

  .content>h1[id]::before,
  .content>h2[id]::before,
  .content>h3[id]::before,
  .content>h4[id]::before,
  .content>h5[id]::before,
  .content>h6[id]::before {
    position: relative;
    display: block;
    content: '';
    /* height: 60px; */
    width: calc(100% + 56px);
    margin-left: -28px
  }

  .content h1 {
    font-size: 14px;
    line-height: 36px;
    margin-top:40px;
    margin-bottom: 21px;
    background:rgba(0, 0, 0, 0.2);
    color: #fff;
  }

  .content h1::before {

  }

  .content *:not(h1) {
    position: relative;
    z-index: 1
  }

  .content h1:first-child,
  .content div:first-child+h1 {
    border-top-width: 0;
    margin-top: 0
  }

  .content h2 {
    font-size: 14px;
    margin-top: 32px;
    margin-bottom: 8px;
    color: #fff
  }

  .content h3,
  .content h4,
  .content h5,
  .content h6 {
    font-size: 14px;
    margin-top: 24px;
    margin-bottom: 8px;
    line-height: 18px;
    color: #eee
  }



  .content hr {
    margin: 2em 0;
    height: 1px;
    background: #E6ECF2;
    border: none;
    margin-left: 28px;
    margin-right: calc(50% + 28px)
  }

  .content table {
    margin-bottom: 1em;
    overflow: auto
  }

  .content table th,
  .content table td {
    text-align: left;
    vertical-align: top;
    line-height: 1.6
  }

  .content table th code,
  .content table td code {
    white-space: nowrap
  }

  .content table th {
    padding: 10px 10px;
    background-color: rgba(255, 255, 255, 0.1);
    vertical-align: bottom
  }

  .content table td {
    padding: 10px;

  }

  .content table tr:nth-child(odd)>td {
    background-color: rgba(255, 255, 255, 0)
  }

  .content table tr:nth-child(even)>td {
    background-color: rgba(255, 255, 255, 0.1)
  }

  .content dt {
    font-weight: bold
  }

  .content dd {
    margin-left: 15px
  }

  .content p,
  .content li,
  .content dt,
  .content dd {

    margin-top: 0
  }

  .content img {
    max-width: 100%
  }

  .content code {
   line-height: 2;
    padding: 3px;
    border-radius: 3px
  }

  .content pre>code {
    background-color: transparent;
    padding: 0
  }

  .content aside {
    margin-top: 1.5em;
    margin-bottom: 1.5em;
    background: rgba(53, 124, 225, 0.05);
    line-height: 1.6;
    color: #ddd;
    margin-left: 28px;
    margin-right: calc(50% + 28px);
    padding: 0.8em 1.2em;
    border: 1px solid;
    border-color: rgba(53, 124, 225, 0.3);
  }

  .content aside::before {
    color: #696cee
  }

  .content aside.warning {
    background-color: rgba(239, 86, 86, 0.05);
    border-color: rgba(239, 86, 86, 0.3)
  }

  .content aside.warning::before {
    color: #EF5656
  }

  .content aside.success {
    background-color: rgba(13, 168, 139, 0.05);
    border-color: rgba(13, 168, 139, 0.3)
  }

  .content aside.success::before {
    color: #0DA88B
  }

  .content aside:before {
    vertical-align: middle;
    padding-right: 0.5em;
    font-size: 14px
  }

  .content .search-highlight {
    padding: 2px;
    margin: -3px;
    border-radius: 4px;
    background: rgba(53, 124, 225, 0.5)
  }

  .content pre,
  .content blockquote {
    background-color:rgba(0, 0, 0, 0.3);
    color: #fff;
    margin: 0;
    margin-left:30px;
    width: 60%;
    clear: right;
    box-sizing: border-box
  }
  .content blockquote {
    margin-top:20px;
  }
  .content pre>p,
  .content blockquote>p {
    margin: 0
  }

  .content pre a,
  .content blockquote a {
    color: #fff;
    text-decoration: none;
    border-bottom: dashed 1px #ccc
  }

  .content pre {
    padding-top: 2em;
    padding-bottom: 2em;
    padding: 2em 28px
  }

  .content blockquote>p {
    background-color:rgba(0, 0, 0, 0.2);
    padding: 13px 2em;
    color: #eee
  }

  @media (max-width: 930px) {
    .left-wrapper {
      left: -230px
    }

    .left-wrapper.open {
      left: 0
    }

    .right-page {
      margin-left: 0
    }

    #nav-button {
      display: block
    }

    .toc-link {
      padding-top: 0.3em;
      padding-bottom: 0.3em
    }
  }

  @media (max-width: 700px) {
    .dark-box {
      display: none
    }

    .content>h1,
    .content>h2,
    .content>h3,
    .content>h4,
    .content>h5,
    .content>h6,
    .content>p,
    .content>table,
    .content>ul,
    .content>ol,
    .content>aside,
    .content>dl {
      margin-right: 0
    }

    .left-wrapper .lang-selector {
      display: block
    }

    .right-page .lang-selector {
      display: none
    }

    .content pre,
    .content blockquote {
      width: auto;
      float: none
    }

    .content>pre+h1,
    .content>blockquote+h1,
    .content>pre+h2,
    .content>blockquote+h2,
    .content>pre+h3,
    .content>blockquote+h3,
    .content>pre+h4,
    .content>blockquote+h4,
    .content>pre+h5,
    .content>blockquote+h5,
    .content>pre+h6,
    .content>blockquote+h6,
    .content>pre+p,
    .content>blockquote+p,
    .content>pre+table,
    .content>blockquote+table,
    .content>pre+ul,
    .content>blockquote+ul,
    .content>pre+ol,
    .content>blockquote+ol,
    .content>pre+aside,
    .content>blockquote+aside,
    .content>pre+dl,
    .content>blockquote+dl {
      margin-top: 28px
    }
  }

  .highlight .c,
  .highlight .cm,
  .highlight .c1,
  .highlight .cs {
    color: #909090
  }



  .highlight .w {
    color: #ffffff;
  }


  .highlight .s2 {
    color: #e6db74;
  }

  .highlight .mi {
    color: #ae81ff;
  }
  .highlight .mf {
    color: #ae81ff;
  }

  .right-page .content{
    padding-bottom: 150px;
  }
  .content li {
    list-style:disc
  }
</style>
